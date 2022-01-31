function interestSystem(amount, interestRate, year){
    var finalAmount = amount * ( 1 + (interestRate/100)*year)
    return finalAmount
}

var amount = 500
var interestRate = 3.875
var year = 5
var finalAmount = interestSystem(amount,interestRate,year)
var message = `With ${interestRate} percent interest rate on ${amount} taka over ${year} years is : ${finalAmount} taka`
console.log(message);
