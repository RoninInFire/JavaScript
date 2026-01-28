/*
Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после
снятия вклада. И остаток после покупки.

Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/

const deposit = 10000;
const depositRate = 7;
const depositTerm = 24;  // months
const housePrice = 13500;

const outcome = deposit * (1 + (depositRate / 100) / 12) ** depositTerm;
const roundOutcome = Math.round(outcome * 100 / 100);
console.log(roundOutcome);

if (roundOutcome >= housePrice) {
    console.log('Вася сможет купить дом за $13500. У него останется: $' + (roundOutcome - housePrice));
} else {
    console.log('Вася не сможет купить дом за $13500. Ему не хватает: $' + Math.abs(roundOutcome - housePrice));
}