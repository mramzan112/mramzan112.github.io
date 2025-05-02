function bigger(){
    //alert("This is a test alert!");
    const text = document.getElementById("textInput");
    const textSize = window.getComputedStyle(text).fontSize;
    const textSizeNum = parseInt(textSize);
    const newSize = textSizeNum + 10;
    text.style.fontSize = newSize + "px";
}
document.getElementById("bigger").onclick = bigger;
function makeFancyShmancy(){
    document.getElementById("fancyshmancy").onchange = function() {
        if (this.checked) {
            const text = document.getElementById("textInput");
            text.style.fontWeight = "bold";
            text.style.color = "blue";
            text.style.textDecoration = "underline";
            document.getElementById("boringbetty").checked = false;
        }
    };
}
function BoringBetty(){
    document.getElementById("boringbetty").onchange = function() {
        if (this.checked) {
            const text = document.getElementById("textInput");
            text.style.color = "black";
            text.style.textDecoration = "none";
            text.style.fontWeight = "normal";
            document.getElementById("fancyshmancy").checked = false;
        }
    };
}
function moo(){
    const text = document.getElementById("textInput");
    text.style.textTransform = "uppercase";
    var textValue = text.value;
    var textArray = textValue.split(".");
    for(let i =0; i < textArray.length-1; i++){
        let words = textArray[i].split(" ");
        if(words.length > 0 && words[words.length-1] !== ""){
            words[words.length-1] += "-Moo";
        }
        textArray[i] = words.join(" ");

    }
    text.value = textArray.join(".").trim();
};
document.getElementById("moo").onclick = moo;