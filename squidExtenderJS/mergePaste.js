async function main(str) {
    //合并剪切板
    let newStr = str + $pb.readString();
    $pb.writeString(newStr);
    return newStr;
}