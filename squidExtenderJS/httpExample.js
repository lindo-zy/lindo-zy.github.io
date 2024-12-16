import $http from "./utils/httpUtils.js";

//调试使用
async function main() {
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
    return result
}

const request = await main();
console.log(JSON.parse(request));