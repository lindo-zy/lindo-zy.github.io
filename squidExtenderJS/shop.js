async function main(str) {
    //解析出url，根据不同url，执行不同操作
    if (!str.trim()) {
        str = $pb.readString();
    }

    let result = []
    //筛选url
    const urlPattern = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const urls = str.match(urlPattern)
    let matches = urls ? urls : [];

    matches.forEach(url => {
        //解析jd的连接
        if (url.includes('jd.com')) {
            const urlPattern = /https?:\/\/[^\s/$.?#].[^\s]*/g;
            let jdMatches = url.match(urlPattern);
            jdMatches.forEach(jdUrl => {
                const data = `{"category":"jump","des":"m","sourceValue":"babel-act","sourceType":"babel","url":"${jdUrl}","M_sourceFrom":"h5auto","msf_type":"auto"}`
                //打开url_scheme
                const urlScheme = 'openApp.jdMobile://virtual?params=' + encodeURIComponent(data)
                result.push({
                    type: 'urlInApp',
                    title: '打开' + jdUrl,
                    content: urlScheme
                })
            })
        } else {
            result.push({
                type: 'urlInApp',
                title: '打开' + url,
                content: url
            })
        }
    })

    //解析tb的连接
    const regex = /\/([a-zA-Z0-9]+)\/ ([A-Z0-9]+)\//g;
    const tbMatches = str.match(regex);
    let tbItems = tbMatches ? tbMatches : [];

    tbItems.forEach(code => {
        result.push({
            type: 'urlInApp',
            title: '打开' + code,
            content: 'taobao://'
        })
    })

    return result;
}