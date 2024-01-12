const getcolor = () => {
    // hex code (color)
    const randomNumber = Math.floor(Math.random() * 16523415);
    const randomcode = "#" +randomNumber.toString(16);
    // 16 stand for hexa decimal code
    document.body.style.backgroundColor = randomcode;
    document.getElementById("color-code").innerText = randomcode;
    // to auto copy code
    navigator.clipboard.writeText(randomcode)
}
// event call

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
// initial call
getcolor();