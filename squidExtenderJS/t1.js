function extractLinks(str) {
    const urlPattern = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const urls = str.match(urlPattern);

    console.log(urls)

    const regex = /\/([a-zA-Z0-9]+)\/ ([A-Z0-9]+)\//g;
    const matches = str.match(regex);

    console.log(matches)
}
