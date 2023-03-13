/**
 * @파일제목   : api.js
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

const SERVER_IP = '192.168.200.169';
const SERVER_PORT = '8080';

async function callFetch(url, method, query, body, headers) {

    try {
        return (await fetch(`${SERVER_IP}:${SERVER_PORT}${url}?${getQueryString(query)}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        })).json();
    } catch (e) {
        console.log(e);
    }
}