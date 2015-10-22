~function (g){
    function mtpl(template) {
        var reg = /\<\%(.+)?\%\>/g;
        var code = 'var r = []; with(data) {';
        var index = 0;
        var match;
        while (match = reg.exec(template) {
            code += 'r.push(\'' + template.substring(index, match.index) + '\');';
            if (match[1].charAt(0) === '=') {
                code += 'r.push(' + match[1] + ');';
            }
            else {
                code += match[1];
            }
            index = match.index + match[0].length;
        }
        code += template.substr(index);
        code += '} return r.join("");';
        return new Function('data', code);
    }
    g.mtpl = module.exports = mtpl;
}(this);
