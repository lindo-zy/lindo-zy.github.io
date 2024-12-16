async function youjia(str) {

    const baseURL = "http://api.yujn.cn/api/youjia.php?msg=四川";

    const headers = {
        'content-type': 'application/json;charset=UTF-8'
    };

    const req = {
        url: encodeURI(baseURL),
        headers: headers
    };
    const result = await $http.get(req);

    const data = JSON.parse(result);
    // 解析返回的JSON数据
    const city = data.city;
    const tips = data.tips;
    const prices = data.prices;

    let readableString = `城市：${city}\n`;
    readableString += `油价调整提示：${tips}\n`;
    readableString += `油价信息：\n`;

    // 遍历油价数据并生成字符串
    prices.forEach(priceInfo => {
        readableString += `${priceInfo.title}：${priceInfo.price}元/升\n`;
    });
    return readableString.replaceAll('#', '-');
}


