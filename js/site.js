
//get the values from the page
//starts or controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    //We need to validate our input
    //parse into Integers

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);

        //we call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("You must enter Integers");
    }



}

//generate numbers from starValue to endValue
//logic function(s)
function generateNumbers(sValue, eValue) {

    let numbers = [];
    //we want to get all numbers from start to end
    for (let index = sValue; index <= eValue; index++) {

        //This will execute in a loop until index = eValue

        numbers.push(index);

    }
    return numbers;

}

//display the numbers and mark odd numbers bold
//display or view functions
function displayNumbers(numbers) {

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {

        let className = "";

        let number = numbers[index];
        if (number % 2 !== 0) {
            className = "odd";
        } else {
            className = "even";
        }

        templateRows += `<tr><td class="${className}">${number}</td=></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}