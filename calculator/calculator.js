function integers(val) {
    document.getElementById("result").value += val
}
/**
 * 
 * @param: String val
 * Commentt: 
 */
function symbol(val) {
    document.getElementById("result").value += val
}
/** 
 * @param :string  val
 *commentt:
 *
 */
function compare() {
    try {
        var x = document.getElementById("result").value
        var y = eval(x)
        document.getElementById("result").value = y
    } catch (err) {
        document.getElementById("result").value = 'Error'
    }
}
/**
 * 
 * @param :string y
 * commentt:
 * 
 */
function clean() {
    document.getElementById("result").value = ""
}
/**
 * 
 * 
 * @param :string ""
 * input result box blank:
 * commentt:
 * 
 * 
 */
function backspace() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}
/**
 * 
 * @param:string value substr 0,value.length-1
 * 
 * 
 */