export function getTextWidth(str) {
    if (!str) return 0;
    // 如果str是数字，则转换为字符串
    if (typeof str === 'number') {
        str = str.toString();
    }
    if (str.length < 3) {
        return 40;
    }
    const regx = /^[0-9]+.?[0-9]*$/;
    let flexWidth = 0;
    for (const char of str) {
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            // 如果是英文字符，为字符分配10个单位宽度
            flexWidth += 10;
        } else if (char >= '\u4e00' && char <= '\u9fa5') {
            // 如果是中文字符，为字符分配15个单位宽度
            flexWidth += 15;
        } else if (regx.test(char)) {
            flexWidth += 9;
        } else {
            // 其他种类字符，为字符分配7个单位宽度
            flexWidth += 7;
        }
    }
    return flexWidth;
}
