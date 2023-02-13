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
import Login from '../svelte/login/Login.svelte';
import Restaurant from "../svelte/restaurant/Restaurant.svelte";

const routes = {
    '/': Login,
    '/login': Login,
    '/restaurant': Restaurant,
};

export default routes;