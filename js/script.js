const range = document.getElementById("rangeValue");
const pageview = document.getElementById("pageViewers");
const cost = document.getElementById("costOfTrial");
const progressbar = document.getElementById("progress");
const dollar = document.getElementById("dollarcost");
const checked = document.getElementById("checkbilling");


function handleInput(inputD){
    progressbar.style.width = (inputD.value / 32 * inputD.clientWidth) + "px";
    
    
    if(checked.checked){    
        dollar.innerHTML  =  "$" + (inputD.value * 12) * (75/100) + ".00";
        pageview.innerHTML = (inputD.value / 32 * 200) * 2 + "K " + "PAGEVIEWS";
    } else {
        dollar.innerHTML  =  "$" + inputD.value + ".00";
        pageview.innerHTML = (inputD.value / 32 * 200) + "K " + "PAGEVIEWS";
    }
}

function changevalue(inputChange){
    if(inputChange.checked){    
            dollar.innerHTML  =  "$" + (range.value * 12) * (75/100) + ".00";
            pageview.innerHTML = (range.value / 32 * 200) * 2 + "K " + "PAGEVIEWS";
    } else {
            dollar.innerHTML  =  "$" + range.value + ".00";
            pageview.innerHTML = (range.value / 32 * 200) + "K " + "PAGEVIEWS";
        }
}
