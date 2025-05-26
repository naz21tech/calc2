function addInput(value) {
document.getElementById("display").value += value;
}
function calculateResult (){
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}
function delVal(){
    document.getElementById("display").value ='';
}