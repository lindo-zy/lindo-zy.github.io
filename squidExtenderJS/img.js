async function main(str) {
    //聚合文字转图片
    if (!str.trim()) {
        //如果没有获取当前输入内容，就使用剪切板
        str = $pb.readString();
    }
    const headers = {
        'content-type': 'application/json;charset=UTF-8'
    }

    const req = {
        url: encodeURI(`https://api.andeer.top/API/img_nokia.php?data=${str}`),
        headers: headers
    };
    const result = await $http.get(req);

    const imgUrl=JSON.parse(result);

    const req2 = {
        url: encodeURI(imgUrl.data),
        headers: headers
    };
    const response=await $http.get(req2);

    $pb.writeImage(response);
    $pb.paste();
    return "";

}