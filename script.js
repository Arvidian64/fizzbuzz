const htmlbutton = document.querySelector("#button")

console.log(htmlbutton)

function FizzBuzz(number) {
    console.log("FizzBuzz is running");
    let answer = number;
    let answerSpot = document.querySelector("#answer");
    for (let i = 1; i <= answer; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            answerSpot.innerHTML += "FizzBuzz<br>";
        }
        else if (i % 3 === 0) {
            console.log("Fizz")
            answerSpot.innerHTML += "Fizz<br>";
        }
        else if (i % 5 === 0) {
            console.log("Buzz")
            answerSpot.innerHTML += "Buzz<br>";
        }
        else {
            console.log(i);
            answerSpot.innerHTML += i + ("<br>");
        }
    }
}

htmlbutton.addEventListener("click", e => {
    let inputbox = document.querySelector("input");
    console.log(inputbox)
    let number = inputbox.value;
    console.log(number)
    FizzBuzz(number);
})