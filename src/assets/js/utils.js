let obj = {
    setRem() {
        var uiW = 320,
            winW = document.documentElement.clientWidth,
            // 定义比例
            rate = winW / uiW;
        document.documentElement.style.fontSize = rate * 100 + "px";

    },
    // 另外一些公共方法
}
export {
    obj
}