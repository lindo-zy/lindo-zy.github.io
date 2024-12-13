async function main(str) {
    //聚合文字转图片
    if (!str.trim()) {
        //如果没有获取当前输入内容，就使用剪切板
        str = $pb.readString();
    }
    // str = encodeURIComponent(str)

    const apiList = [
        {
            title: '鲁迅话多图',
            url: `https://api.andeer.top/API/img_luxun.php?text=${str}`
        },
        {
            title: '小人举牌图',
            url: `https://api.cenguigui.cn/api/jp/?msg=${str}`
        },
        {
            title: '草稿纸图',
            url: `https://api.cenguigui.cn/api/diy/?text=${str}`
        },
    ]

    const headers = {
        'content-type': 'application/json;charset=UTF-8'
    }

    const req = {
        url: encodeURI(`https://api.cenguigui.cn/api/diy/?text=${str}`),
        headers: headers
    };
    const result = await $http.get(req);
    $pb.writeImage(result);
    $pb.paste();

}