let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

console.log(add, subtract);

add.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) + 1;

    if (result > 10) {
        result = 0;
    }

    output.innerText = result;
});

subtract.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;

    if (result < 0) {
        result = 0;
    }

    output.innerText = result;
});

setInterval(function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) + 1;

    if (result > 100) {
        result = 0;
    }

    output.innerText = result;
}, 1000)

