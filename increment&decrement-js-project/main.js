let num = 0;
function increment(){
    let value = ++num;
    console.log(value);
    
    document.querySelector(".output").innerHTML = value;
}
increment()


function decrement(){
    let value2 = --num;
    console.log(num);
    document.querySelector(".output").innerHTML = value2;
}
decrement()

function onglow(){
    let glow = document.querySelector(".output");

    if (glow) { // Check if the element exists
        if (glow.style.webkitBoxShadow === "" || glow.style.webkitBoxShadow === "none") {
            // Apply styles if the box shadow is not applied or is set to "none"
            glow.style.backgroundColor = "rgba(46,241,255,0.9)";
            glow.style.webkitBoxShadow = "0px 0px 105px 45px rgba(46,241,255,0.9)";

            glow.style.transition = "ease-in-out .5s";
        } else {
            glow.style.webkitBoxShadow = "none";
           console.log("Stop");
        }

        console.log("clicked");
}
}

onglow()
function off(){
    let glow = document.querySelector(".output");

    if (glow) { // Check if the element exists
        if (!glow.style.webkitBoxShadow === "" || glow.style.webkitBoxShadow === "none") {
            // Apply styles if the box shadow is not applied or is set to "none"
            glow.style.webkitBoxShadow = "none";
        } else {
            glow.style.webkitBoxShadow = "none";

        }

        console.log("clicked2");
}
}

off()