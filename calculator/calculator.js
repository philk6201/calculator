


function number(val) {
    document.getElementById("result").value += val
}

function operator(val) {
    document.getElementById("result").value += val
}

function equalto() {
    var x = document.getElementById("result").value
    var y = eval(x)
    document.getElementById("result").value = y
}

function clearto() {
    document.getElementById("result").value = ""

}

function backspace() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}