let makeHtmlSafe = string => string.replace("&", "&amp;")
    .replace("'", "&apos;")
    .replace("\"", "&quot;")
    .replace("<", "&lt;")
    .replace(">", "&gt;");

let html = (strings, arg1, arg2) => strings[0] + makeHtmlSafe(arg1) + strings[1] + makeHtmlSafe(arg2) + strings[2];

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);