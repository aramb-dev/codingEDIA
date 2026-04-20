let randomNumber = Math.floor(Math.random()*100)

console.log(randomNumber)

let st = "Social Science" 
let indexOfC = st.indexOf("c")
console.log(indexOfC)

let x = 2.8 
console.log('x is ' + x)
let y = -3.2 
console.log('y is ' + y)
let a = Math.ceil(x) + Math.floor(y)
console.log('a is ' + a +' after ceiling x which makes x 3 and flooring y which makes y -4' + ' so a is 3 + -4 = -1')
let b = Math. floor (x) + Math.ceil(y)
console.log('b is ' + b +' after flooring x which makes x 2 and ceiling y which makes y -3' + ' so b is 2 + -3 = -1')
let c = Math.ceil(x+y)
console.log('c is ' + c +' after ceiling x+y which makes x+y -0.4' + ' so c is 0')
let d = Math. floor (x+y)
console.log('d is ' + d +' after flooring x+y which makes x+y -0.4' + ' so d is -1')
console. log(a + b + c + d)
console.log('a + b + c + d is ' + (a + b + c + d) +' because a is -1, b is -1, c is 0 and d is -1 so -1 + -1 + 0 + -1 = -3')