const htmlbutton = document.querySelector("#button")

console.log(htmlbutton)

function FizzBuzz() {
    console.log("FizzBuzz")
}

htmlbutton.addEventListener("click", e => {
    let inputbox = document.querySelector("input");
    console.log(inputbox)
    let number = inputbox.value;
    console.log(number)
    FizzBuzz();
})