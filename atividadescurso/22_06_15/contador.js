var counterVal = '';

function increment (){
    updateDisplay(++ counterVal);
}

function resetCounter(){
    counterVal = parseInt(document.querySelector('#inicial').value)
    updateDisplay(counterVal);
}

function decrease (){
    updateDisplay(-- counterVal);
}

function updateDisplay(val){
    document.getElementById('contador').innerHTML = val;
}