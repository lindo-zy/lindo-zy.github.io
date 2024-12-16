// 全局变量
const requestHeader = { 'content-type': 'application/json;charset=UTF-8' };

//文生图整合
async function main(str) {
    const createListBtn = (title, req) => ({
        type: 'function',
        title: title,
        content: 'txtToImages',
        args: [req],
    });

    // 优化后的输入判断
    const inputTxt = (str && typeof str === 'string' && str.trim() !== '') ? str : "默认文本";
    return [
        createListBtn('鲁迅', { url: encodeURI(`https://api.andeer.top/API/img_luxun.php?text=${inputTxt}`), headers: requestHeader }),
        createListBtn('举牌', { url: encodeURI(`https://api.andeer.top/API/jupai.php?text=${inputTxt}`), headers: requestHeader }),
        createListBtn('诺基亚', { url: encodeURI(`https://api.andeer.top/API/img_nokia.php?data=${inputTxt}`), headers: requestHeader }),
        createListBtn('手写', { url: encodeURI(`https://api.yujn.cn/api/shouxie.php?text=${inputTxt}`), headers: requestHeader }),
    ];
}

async function txtToImages(req) {
    try {
        const result = await $http.get(req);
        // 尝试解析为 JSON
        let jsonData;
        try {
            jsonData = JSON.parse(result); // 尝试解析为 JSON
            //console.log("返回的结果是 JSON:", jsonData);
            const imageUrl = jsonData.data; // 假设 JSON 中有一个 data 字段
            //console.log(imageUrl);
            const reqData = { url: encodeURI(imageUrl), headers: requestHeader };
            const resultData = await $http.get(reqData);
            $pb.writeImage(resultData); // 确保 resultData 是有效的图像数据
            $pb.paste();
            return null;
        } catch (error) {
            $pb.writeImage(result);
            $pb.paste();
            return null;
        }

    } catch (error) {
        console.error("请求失败:", error);
    }
}


