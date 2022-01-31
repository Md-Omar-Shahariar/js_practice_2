function celciousToFahrenheit(celcious){
    var fahrenheit = (celcious * (9/5)) +32
    return fahrenheit
}


var celcious = 33
var fahrenheit = celciousToFahrenheit(celcious)
var message = `${celcious} deg celcious =  ${fahrenheit} fahrenheit`
console.log(message);