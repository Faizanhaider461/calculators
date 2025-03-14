// function appendToDisplay(value) {
//     document.getElementById("display").value += value;
// }

// function clearDisplay() {
//     document.getElementById("display").value = "";
// }

// function calculate() {
//     try {
//         document.getElementById("display").value = eval(document.getElementById("display").value);
//     } catch (e) {
//         alert("Invalid Expression");
//     }
// }

function SQ(){
    let display = document.getElementById("display");
    display.value = Math.sqrt(parseFloat(display.value)).toFixed(6);
}
function PI() {
    let a = document.getElementById("display");
    display.value += Math.PI.toFixed(6); // Inserts 3.141593
}
function BS() {
            let b = document.querySelector("#display");
            display.value = b.value.slice(0, -1);
        }
function CD() { document.querySelector("#display").value = ""; }
function D7() { document.querySelector("#display").value += "7"; }
function D8() { document.querySelector("#display").value += "8"; }
function D9() { document.querySelector("#display").value += "9"; }
function A() { document.querySelector("#display").value += "+"; }
function D4() { document.querySelector("#display").value += "4"; }
function D5() { document.querySelector("#display").value += "5"; }
function D6() { document.querySelector("#display").value += "6"; }
function S() { document.querySelector("#display").value += "-"; }
function D1() { document.querySelector("#display").value += "1"; }
function D2() { document.querySelector("#display").value += "2"; }
function D3() { document.querySelector("#display").value += "3"; }
function M() { document.querySelector("#display").value += "*"; }
function D0() { document.querySelector("#display").value += "0"; }
function Dot() { document.querySelector("#display").value += "."; }
function D() { document.querySelector("#display").value += "/"; }
function Cal() { document.querySelector("#display").value = eval(document.getElementById("display").value); }
