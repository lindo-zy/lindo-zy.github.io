async function parseJD(str) {
    //解析jd的url，生成跳转链接
    // 定义用于匹配URL的正则表达式
    const urlPattern = /https?:\/\/[^\s/$.?#].[^\s]*/g;
    // 使用正则表达式匹配所有出现的URL
    let urls = []
    urls = str.match(urlPattern);
    // 如果没有找到任何URL，则返回空数组
    let res = []
    urls.forEach(url => {
        if (url.includes('jd.com')) {
            const data = `{"category":"jump","des":"m","sourceValue":"babel-act","sourceType":"babel","url":"${url}","M_sourceFrom":"h5auto","msf_type":"auto"}`
            //打开url_scheme
            const urlScheme = 'openApp.jdMobile://virtual?params=' + encodeURIComponent(data)
            console.log(urlScheme);
            res.push({
                type: 'urlInApp',
                title: '打开' + url,
                content: urlScheme
            })
        } else {
            //打开url
            res.push({
                type: 'urlInApp',
                title: '打开' + url,
                content: url
            })
        }
    })
    return res
}

async function parseTB(str) {
// 创建正则表达式
    const regex = /\/([a-zA-Z0-9]+)\/ ([A-Z0-9]+)\//g;

// 使用matchAll方法获取所有匹配项
    const matches = str.match(regex);
    let res = []
    matches.forEach(code => {
        res.push({
            type: 'urlInApp',
            title: '打开' + code,
            content: 'taobao://'
        })
    })
    return res
}

async function main(str) {
    //主函数
    //快速跳转，返回一个值
    //列表选择，返回列表
    //操作类型
    // $pb.readString()：读取剪贴板中的文本，返回值为字符串。
    // $pb.writeString(str)：将传入的字符串写入剪贴板，没有返回值。
    // $pb.readImage()：读取剪贴板中的图片，返回值为图像。
    // $pb.writeImage(img)：将传入的图像写入剪贴板，没有返回值。
    // $pb.paste()：执行粘贴动作，没有返回值。
    //$url.open(str)：在浏览器中打开传入的链接或url scheme，没有返回值。(前提：传入str为有效链接)
    // $url.openInApp(str)：在当前应用中打开传入的链接，没有返回值。(前提：传入str为有效链接)
    // $app.open(str)：打开bundle identifier对应的应用，没有返回值

    if (!str.trim()) {
        str = $pb.readString()
    }
    // 添加自定义函数
    //解析当前的内容，如果包含jd的链接，则走jd流程否则走tb流程
    let result = null
    if (str.includes('jd.com')) {
        result = await parseJD(str);
        return result;
    }
    result = await parseTB(str);
    return result;
}