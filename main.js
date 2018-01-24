function c(val) {

    document.getElementById("display").value = val;
}

function math(val) {

    document.getElementById("display").value += val;
}

function doMath() {
    var inputNum = document.getElementById("display").value;
    var result = Math.sqrt(inputNum);
    document.getElementById("display").value = result; 
}
function e() {
    
    try {
        c(eval(document.getElementById("display").value))
    }

    catch(e) {

        c('Error')
    }
}