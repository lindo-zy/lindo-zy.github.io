async function main(str) {
    // 如果输入框没有文字，则从剪贴板获取内容
    if (!str) {
        str = $pb.readString(); // 从剪贴板读取文字
    }

    // 如果剪贴板为空，则终止程序
    if (!str) {
        console.log("剪贴板没有内容！");
        return;
    }

    // 分割剪贴板内容，提取标题和日期
    const parts = str.split('，'); // 使用中文逗号分隔
    const title = parts[0].trim(); // 提取标题


    // 构建 URL Schemes
    const urlScheme = `ticktick://x-callback-url/v1/add_task?title=${encodeURIComponent(
        title
    )}`;

    // 打开滴答清单添加任务的 URL Schemes
    $url.open(urlScheme);
}