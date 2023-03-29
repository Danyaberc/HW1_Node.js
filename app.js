
//1 Варіант виконання дз
// const readtext = require('fs')
// const mytxt = require('./hw.txt')
// const hwork = readtext.join('mytxt')
// console.log(hwork)

//2 Варіант виконання дз
// const read = require('jsontxt')
// const hwtxt = require('./hw.txt')
// const hwork = read().hwtxt()
// console.log('hwork')

//3 Варіант виконання дз
// const fs = require('./hw.txt')
// console.log(fs)

//4 Варіант виконання дз(після пошуків в інтернеті,працюючий варіант!)
const fs = require('fs')
const hwtxt2 = "Наш викладач гарна і розумна людина."
const hwtxt = "Пішли вечеряти завтра в ресторан на нашому майдані незалежності\n" + hwtxt2
fs.writeFileSync('homework1_node.txt', hwtxt)
fs.readFileSync('homework1_node.txt', 'utf-8')
console.log(hwtxt)

