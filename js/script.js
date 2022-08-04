const range = document.getElementById("rangeValue").value;
const pageview = document.getElementById("pageViewers");
const cost = document.getElementById("costOfTrial");
const progressbar = document.getElementById("progress");


function handleInput(inputD){
    progressbar.style.width = (inputD.value / 32 * inputD.clientWidth) + "px";
    
    console.log("es aris calculated sigane", inputD.value / 100 * inputD.clientWidth);
}


