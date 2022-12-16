function countHours(year, holidays) {
  let days = 0
  holidays.forEach(holiday => {
    let date = new Date(year + "-"+ holiday)
    if(date.getDay() !== 0 && date.getDay() !== 6){
      days++
    }
  })
  
  return days*2
}

const year = 1985
const holidays = ['01/01', '01/06', '02/03','02/02', '02/17', '02/28', '06/03', '12/06', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

console.log(countHours(year, holidays)) // 2 días -> 4 horas extra en el año