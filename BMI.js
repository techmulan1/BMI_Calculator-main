const weightInput = document.querySelector('#weight>input');
const heightInput = document.querySelector('#height>input');
const button = document.querySelector('.button button')
const BMIInput = document.querySelector('#BMI>input');


function roundNum (num){
    return Math.round (num*100)/100
}

weightInput.addEventListener ('input', function(){
    const wNum = parseFloat (weightInput.value);
    const hNum = "...";
    const BMINum = "...";

    heightInput.value = (hNum);
    BMIInput.value = (BMINum);
})

heightInput.addEventListener ('input', function(){
    const hNum = heightInput.value ;
    const wNum = weightInput.value;
    const BMINum = "...";

    heightInput.value=hNum;
    weightInput.value=wNum;
    BMIInput.value=(BMINum);
})


button.addEventListener ("click", () => {
    const hNum = heightInput.value;
    const wNum = weightInput.value;
    const BMINum= wNum/(hNum*hNum) ;

    heightInput.value=hNum;
    weightInput.value=wNum;
    BMIInput.value=roundNum(BMINum);
})