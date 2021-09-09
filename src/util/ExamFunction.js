export const Exam1 = (arr) => {
    if (arr.length > 0) {
        const mean = (arr.reduce((a, b) => a + b) / arr.length).toFixed(2)
        const max = arr.reduce((a, b) => Math.max(a, b))
        const min = arr.reduce((a, b) => Math.min(a, b))
        const result = {
            min:min,
            max:max,
            mean:mean
        }        
        return result
    }
}

export const Exam2 = (arr) => {
    if (arr.length > 0) {
        let min = arr[0]
        let max = arr[0]
        let currentVal, mean
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            currentVal = arr[i]
            if (currentVal < min) {
                min = currentVal
            }
            if (currentVal > max) {
                max = currentVal
            }
            sum += arr[i]
        }
        mean = (sum / arr.length).toFixed(2)
        const result = {
            min:min,
            max:max,
            mean:mean
        }
        return result
    }
}

export const Exam3 = (n) => { //Factorial
    if (n == 0 || n == 1)
        return 1
    return n * Exam3(n - 1)
}