/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

// Данные
const salaryPerHours = 80;
const offerHours = 40;
const workingHoursPerDay = 5;
const daysLimit = 11;
const weekendsDay = 2;
const workingDayLimit = daysLimit - weekendsDay;
const freeTime = workingDayLimit * workingHoursPerDay;
console.log('Свободного времени: ' + freeTime);

const successfully = offerHours <= freeTime;
console.log('Успеем ли выполнить работу: ' + successfully);

const salary = salaryPerHours * offerHours;
console.log('Сколько будет стоить работа: $' + salary);