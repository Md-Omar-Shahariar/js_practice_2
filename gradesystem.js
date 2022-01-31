function gradeCalculator(marks){
    switch (true) {
        case marks > 89:
            return "A"    
            break
        case marks > 79:
            return "A-"
            break
        case marks > 74:
            return "B+"
            break
        case marks> 69:
            return 'B-'
            break
        case marks > 64:
            return 'C+'
            break
        case marks > 59:
            return 'C-'
            break
        case marks > 55:
            return 'D'
            break
        default:
            return "F"
            break;
    }


}

var marks = 87
var grade = gradeCalculator(marks)
var message = `Your Garde is : ${grade}` 
console.log(message)