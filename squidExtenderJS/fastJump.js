async function main(str) {
    if (!str.trim()) {
        //如果没有获取当前输入内容，就使用剪切板
        str = $pb.readString();
    }

    //跳转TB
    $app.open('')
}

