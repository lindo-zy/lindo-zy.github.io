function main(str) {
    const urlPattern = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const urls = str.match(urlPattern);
    return urls ? urls.join('\n') : str;
}