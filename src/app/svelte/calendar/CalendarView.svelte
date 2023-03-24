<script>
    import Calendar from "./Calendar.svelte";

    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

    let headers = [];
    let now = new Date();
    let year = now.getFullYear();   // 오늘 연도
    let month = now.getMonth();     // 오늘 월

    let days = [];	//	The days to display in each box

    function randInt(max) {
        return Math.floor(Math.random()*max)+1;
    }

    let items = [];

    function initMonthItems() {
        let y = year;
        let m = month;
        let d1=new Date(y,m,randInt(7)+7);
        items = [
            {title:"순대국밥 8,000원",className:"task--primary",date:new Date(y,m,randInt(6)),len:1},
            {title:"돈까스 10,500원",className:"task--warning",date:d1,len:1},
            {title:"휴가",date:d1,className:"task--info",len:4,isBottom:true},
            {title:"라멘 11,000원",date:new Date(y,m,randInt(7)+14),className:"task--info",len:1,detailHeader:"사이드 추가",detailContent:"차슈 500원"},
            {title:"한식뷔페 8,000원",date:new Date(y,m,randInt(7)+21),className:"task--danger",len:1,vlen:2},
        ];

        //This is where you calc the row/col to put each dated item
        for (let i of items) {
            let rc = findRowCol(i.date);
            if (rc == null) {
                i.startCol = i.startRow = 0;
            } else {
                i.startCol = rc.col;
                i.startRow = rc.row;
            }
        }
    }

    $: month,year,initContent();

    // choose what date/day gets displayed in each date box.
    function initContent() {
        headers = dayNames;
        initMonth();
        initMonthItems();
    }

    function initMonth() {
        days = [];

        // 당월 1일 요일
        const firstDay = new Date(year, month, 1).getDay();

        // 당월 마지막일
        const daysInThisMonth = new Date(year, month + 1, 0).getDate();

        // 전월 마지막일
        const daysInLastMonth = new Date(year, month, 0).getDate();

        // 전월
        const prevMonth = month == 0 ? 11 : month - 1;

        //	show the days before the start of this month (disabled) - always less than 7
        for (let i = daysInLastMonth-firstDay; i < daysInLastMonth; i++) {
            let d = new Date(prevMonth == 11 ? year-1 : year, prevMonth, i+1);
            days.push({name: (i + 1), enabled: false, date: d});
        }

        //	show the days in this month (enabled) - always 28 - 31
        for (let i=0; i<daysInThisMonth; i++) {
            let d = new Date(year, month, i + 1);
            if (i == 0)
                days.push({name: (i + 1), enabled: true, date: d});
            else
                days.push({name:i + 1, enabled: true, date: d});
        }

        //	show any days to fill up the last row (disabled) - always less than 7
        for (let i=0; days.length%7; i++) {
            let d = new Date((month == 11 ? year + 1 : year) , (month + 1) % 12, i + 1);
            if (i == 0)
                days.push({name: i + 1, enabled: false, date: d});
            else
                days.push({name: i + 1, enabled: false, date: d});
        }
    }

    function findRowCol(dt) {
        for (let i=0;i<days.length;i++) {
            let d = days[i].date;
            if (d.getYear() === dt.getYear()
                && d.getMonth() === dt.getMonth()
                && d.getDate() === dt.getDate())
                return {row:Math.floor(i/7)+2,col:i%7+1};
        }
        return null;
    }

    function itemClick(e) {
        console.log(e.date.toString() + ' clicked');
    }
    function dayClick(e) {
        console.log(e.date.toString() + ' clicked');
    }
    function headerClick(e) {
        console.log('Header clicked.');
    }

    function next() {
        month++;
        if (month == 12) {
            year++;
            month = 0;
        }
    }

    function prev() {
        if (month == 0) {
            month = 11;
            year--;
        } else {
            month--;
        }
    }

</script>

<div class="calendar-container">
    <div class="calendar-header">
        <h1>
            <button on:click={() => year--}>&Lt;</button>
            <button on:click={() => prev()}>&lt;</button>
            {year}년 {month + 1}월
            <button on:click={() => next()}>&gt;</button>
            <button on:click={() => year++}>&Gt;</button>
        </h1>
    </div>

    <Calendar
            {headers}
            {days}
            {items}
            on:dayClick={(e)=>dayClick(e.detail)}
            on:itemClick={(e)=>itemClick(e.detail)}
            on:headerClick={(e)=>headerClick(e.detail)}
    />
</div>

<style>
    .calendar-container {
        width: 90%;
        margin: auto;
        overflow: hidden;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        background: #fff;
        max-width: 1200px;
    }

    .calendar-header {
        text-align: center;
        padding: 20px 0;
        background: #eef;
        border-bottom: 1px solid rgba(166, 168, 179, 0.12);
    }

    .calendar-header h1 {
        margin: 0;
        font-size: 18px;
    }

    .calendar-header button {
        background: #eef;
        border: 1px ;
        padding: 6px;
        color: rgba(81, 86, 93, 0.7);
        cursor: pointer;
        outline: 0;
    }
</style>



