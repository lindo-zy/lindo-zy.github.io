import axios from 'axios';

// 创建一个新的 Axios 实例
const $http = axios.create();
$http.get = async function (params = {}) {
    const response = await axios.get(params.url, {
        headers: params.headers
    });
    return JSON.stringify(response.data);
}


$http.post = async function (params = {}) {
    const response = await axios.post(params.url,
        params.body,
        {
            headers: params.headers
        });
    return JSON.stringify(response.data);
}


async function main() {
    //本地测试
    const data = {
        page_num: 1,
        page_size: 100,
        username: 'admin'
    };
    const request = {
        url: 'https://httpbin.org/post',
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(data)
    }
    const result = await $http.post(request);
    console.log(JSON.parse(result));

}

export default $http;