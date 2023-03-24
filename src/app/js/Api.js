// /**
//  * @파일제목   : Api.js
//  * @프로젝트명  : ST-1
//  * @소유      : (주)스패셜티
//  * @생성자    : 김언중
//  * @생성날짜   : 2023. 01. 24.
//  *
//  * == 수정사항 ==
//  * ---------------------------------------
//  * 2023. 01. 24.  김언중 최초 생성
//  *
//  */
//
// // const SERVER_IP = 'http://192.168.0.19';
const SERVER_IP = 'localhost';
const SERVER_PORT = '8088';

import axios from "axios";

const axiosAPI = axios.create({
    baseURL : `http://${SERVER_IP}:${SERVER_PORT}/`
});

const apiRequest = (method, url, request) => {
    const headers = {
        authorization: "",
        // "Access-Control-Allow-Origin" : "*",
        'Content-Type': 'content/type',
    };

    return axiosAPI({
        method,
        url,
        params: request,
        headers
    }).then(res => {
        return Promise.resolve(res.data);
    }).catch(err => {
        return Promise.reject(err);
    });
};

const get = (url, request) => apiRequest("get",url,request);
const deleteRequest = (url, request) =>  apiRequest("delete", url, request);
const post = (url, request) => apiRequest("post", url, request);
const put = (url, request) => apiRequest("put", url, request);
const patch = (url, request) =>  apiRequest("patch", url, request);

const Api ={
    get,
    delete: deleteRequest,
    post,
    put,
    patch
};
export default Api;