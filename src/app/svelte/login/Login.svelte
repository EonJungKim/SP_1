<script>
    let txtId = '';
    let txtPwd = '';
    let idSave = false;

    function validate() {
        console.log('textId : ' + txtId);
        console.log('textPwd : ' + txtPwd);
        console.log('idSave : ' + idSave);

        if (txtId.trim() == '') {
            alert('');
            return false;
        }

        if (txtPwd.trim() == '') {
            alert('');
            return false;
        }

        return true;
    }

    function login() {
        if (validate()) {
            let response;
            response = fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&limit=10`).then(res => res.json());
            const result = response.result;
            if (result.code == '200') {
                // TODO : 로그인 정보를 Store에 저장하는 소스코드 추가
                location.href = '/';
            } else {
                alert(result.message);
            }
        }
    }

    function callFindIdPwdPop() {

    }
</script>

<div>
    <div>
        <div style="display: inline-block;">
            <input type="text" id="txtId" style="display: block;" bind:value={txtId} />
            <input type="password" id="txtPwd" style="display: block;" bind:value={txtPwd}/>
        </div>
        <button style="height: 100%;" on:click={login}>로그인</button>
    </div>
    <div>
        <button on:click={callFindIdPwdPop}>ID/PWD 찾기</button>
        <label style="display: inline-block;">아이디 저장<input type="checkbox" bind:checked={idSave} /></label>
    </div>
</div>