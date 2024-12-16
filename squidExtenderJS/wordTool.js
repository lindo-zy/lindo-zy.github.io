async function main(str) {
    //文本处理
    if (!str.trim()) {
        //如果没有获取当前输入内容，就使用剪切板
        str = $pb.readString();
    }
    return [
        { type: 'function', title: '提取链接并打开', content: 'extractLinksAndOpen', args: [str] },
        { type: 'function', title: '提取链接', content: 'extractLinks', args: [str] },
        { type: 'function', title: '数据去重', content: 'removeDuplicates', args: [str] },
        { type: 'function', title: '竖立文字', content: 'verticalText', args: [str] },
        { type: 'function', title: '反转文字', content: 'reverseText', args: [str] },
        { type: 'function', title: '清理空白符号', content: 'removeWhitespace', args: [str] },
        { type: 'function', title: '字数检测', content: 'countTextAndSymbols', args: [str] }
    ];
}

// 数据去重
async function removeDuplicates(str) {
    const arr = str.split(',').map(item => item.trim().replace(/[\s\r\n]+/g, '').toLowerCase());
    const uniqueArr = [...new Set(arr)];
    return uniqueArr.length !== arr.length ? uniqueArr.join(',') : "无重复数据";
}

// 提取链接
async function extractLinks(str) {
    const urlPattern = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const urls = str.match(urlPattern);
    return urls ? urls.join('\n') : "未找到链接";
}

async function extractLinksAndOpen(str) {
    const urlPattern = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const urls = str.match(urlPattern);
    const result=[];
    urls.forEach(url => {
        result.push({
            type: 'urlInApp',
            title:url,
            content:url,
        });
    })
    return result;
}

// 竖立文字
async function verticalText(str) {
    return str.replace(/\s+/g, '').split('').join('\n');
}

// 反转文字
async function reverseText(str) {
    return str.split('').reverse().join('');
}

// 清理空白符号
async function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}

// 字数检测
async function countTextAndSymbols(str) {
    const textCount = (str.match(/[\u4e00-\u9fa5\w]/g) || []).length;
    const symbolCount = (str.match(/[^\u4e00-\u9fa5\w\s]/g) || []).length;
    const totalCount = textCount + symbolCount;
    return `${str}\n文字: ${textCount}\n符号: ${symbolCount}\n合计: ${totalCount}`;
}