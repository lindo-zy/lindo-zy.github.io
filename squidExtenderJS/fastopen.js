async function main(str) {

    if (!str.trim()) {
        //如果没有获取当前输入内容，就使用剪切板
        str = $pb.readString();
    }
    str = encodeURIComponent(str);
    return [{
        type: 'urlInApp',
        title: '拼多多搜索',
        content: 'pinduoduo://com.xunmeng.pinduoduo/search_result.html?search_key=' + str
    },
        {
            type: 'urlInApp',
            title: '淘宝搜索',
            content: 'taobao://s.taobao.com/?q=' + str
        },
        {
            type: 'urlInApp',
            title: '京东搜索',
            content: `openjd://virtual?params=%7B%22des%22:%22productList%22,%22keyWord%22:%22${str}%22,%22from%22:%22search%22,%22category%22:%22jump%22%7D`
        },
        {
            type: 'urlInApp',
            title: '小红书搜索',
            content: `xhsdiscover://search/result?keyword=${str}`
        },
        {
            type: 'urlInApp',
            title: '哔哩哔哩搜索',
            content: `bilibili://search?keyword=${str}`
        },
        {
            type: 'urlInApp',
            title: '谷歌搜索',
            content: 'https://www.google.com/search?q=' + str
        },
        {
            type: 'urlInApp',
            title: 'Alook搜索',
            content: `Alook://${str}`
        },
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
    ];

}