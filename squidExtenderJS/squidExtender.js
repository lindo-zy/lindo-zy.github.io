async function main(str) {
    if (!str.trim()) {
        //如果没有获取当前输入内容，就使用剪切板
        str = $pb.readString();
    }

    return [{
        type: 'function',
        content: 'myFunc1',
    },
        {
            type: 'function',
            content: 'myFunc2',
            args: ['text1', 'text2'],
        }];
}

async function search() {

}