async function main(str) {

    if (!str.trim()) {
        //如果没有获取当前输入内容，就使用剪切板
        str = $pb.readString();
    }
    str = encodeURIComponent(str);
    return [
        {
            type: 'urlInApp',
            title: 'piico最近照片',
            content: 'piiico://last-photo'
        },
        {
            type: 'urlInApp',
            title: '闲鱼',
            content: 'fleamarket://'
        },
        {
            type: 'urlInApp',
            title: '谷歌搜索',
            content: 'https://www.google.com/search?q=' + str
        }
    ];

}