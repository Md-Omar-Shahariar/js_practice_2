function fahrenheitToCelcious(fahrenheit){
    var celcious = ((fahrenheit - 32) * (5/9))
    return celcious

}

var fahrenheit = 0
var celcious = fahrenheitToCelcious(fahrenheit)

var message = `${fahrenheit} fahrenheit = ${celcious} deg celcious`
console.log(message);