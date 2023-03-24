/**
 * @파일제목   : routes.js
 * @프로젝트명  : ST-1
 * @소유      : (주)스패셜티
 * @생성자    : 김언중
 * @생성날짜   : 2023. 01. 24.
 *
 * == 수정사항 ==
 * ---------------------------------------
 * 2023. 01. 24.  김언중 최초 생성
 *
 */
import login from '../svelte/login/Login.svelte';
import rstntList from "../svelte/restaurant/List.svelte";
import rstntReg from "../svelte/restaurant/Regist.svelte";
import rstntMod from "../svelte/restaurant/Modify.svelte";
import rstntView from "../svelte/restaurant/View.svelte";
import CalendarView from "../svelte/calendar/CalendarView.svelte";
import home from "../svelte/home/Home.svelte";

const routes = {
    '/': login,
    '/home': home,
    '/login': login,

    // 음식점 관련
    '/restaurant': rstntList,
    '/restaurant/list': rstntList,
    '/restaurant/reg': rstntReg,
    '/restaurant/mod': rstntMod,
    '/restaurant/view': rstntView,
    
    // 달력 관련
    '/calendar': CalendarView,
    '/calendar/view': CalendarView
};

export default routes;