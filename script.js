
const myOperation = document.getElementById("operation");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submit = document.getElementById("submit");


function operation() {
    const result = document.getElementById("result");
    const n1 = Number(input1.value);
    const n2 = Number(input2.value);
    const op = myOperation.value;
    let output;


    if (op === "+") {
        output = n1 + n2;
    } else if (op === "-") {
        output = n1 - n2;
    } else if ((op === "*") || (op == "x")) {
        output = n1 * n2;
    } else if (op === "/"){
        output = n1 / n2;
    } else if (op === "^"){
        output = n1**n2;
    } else {
        output = "error";
    }
    result.innerHTML = output;
}

submit.addEventListener("click", operation);