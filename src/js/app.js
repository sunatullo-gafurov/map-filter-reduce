//Problem #9

const purchases = [
    {id: 1, date: '01.01.2020', values: [
        {id: 1, amount: 2000, category: 'auto'},
        {id: 2, amount: 3000, category: 'food'},
        {id: 3, amount: 300, category: 'beauty'}
    ]},
    {id: 2, date: '03.01.2020', values: [
        {id: 4, amount: 3000, category: 'auto'},
        {id: 5, amount: 30000, category: 'travel'}
    ]},
    {id: 6, date: '04.01.2020', values: [
        {id: 6, amount: 3000, category: 'food'}
    ]}
];

// В массиве purchases хранятся покупки по дням.

// Напишите функции:

// Находят дату, в которую совершено максимальное количество покупок (количество, а не стоимость) - подсказку см. ниже
// Находят дату, в которую совершено максимальное количество покупок (по суммарной стоимости)
// Найти самую дорогую покупку
// Найти категорию, в которой совершено максимальное количество покупок по сумме
// Найти среднюю стоимость трат в день
// Подготовить статистику в разрезе (сумма трат в день):


// #1


// const mapped = purchases.map(i => ({
//     date: i.date,
//     numOfPurchase: i.values.length
// }))
// .reduce((acc, curr) => {
//     if (acc.numOfPurchase > curr.numOfPurchase) {
//         return acc;
//     } else {
//         return curr;
//     }
// });

// const result = mapped.date;
// console.log(result);




//  #2

// const mapped = purchases.map(i => {
//     return {
//         date: i.date,
//         sumOfPurchases: i.values.reduce((acc, curr) => {
//             return acc + curr.amount;
//         }, 0)
//     }
// })
// .reduce((acc, curr) => {
//     if (acc.sumOfPurchases > curr.sumOfPurchases) {
//         return acc;
//     } else {
//         return curr;
//     }
// });
// const result = mapped.date;
// console.log(result);



// #3


// const result = purchases.map(i => i.values.map(j => j.amount))
//                 .flat()
//                 .reduce((acc, curr) => acc < curr ? curr : acc); 
// console.log(result);



//  #4


// const mapped = purchases.map(o => o.values)
// .flat()
// .reduce((acc, curr) => {
//     const existent = acc.find(o => o.category === curr.category);
//     if (existent === undefined) {
//         acc.push({
//             category: curr.category,
//             amount: curr.amount,
//         });
//     } else {
//         existent.amount += curr.amount;
//     }
//     return acc;
// }, [])
// .reduce((acc, curr) => {
//     if (acc.amount > curr.amount) {
//         return acc;
//     } else {
//         return curr;
//     }
// });

// const result = mapped.category;
// console.log(result);




//   #5


// const amounts = purchases.map(i => i.values.map(j => j.amount));
// const result = amounts.flat().reduce((acc, curr) => acc + curr) / amounts.length;
// console.log(result);




//   #6

// const stats = purchases.map(i => ({
//     date: i.date,
//     amount: i.values.reduce((acc, curr) => acc + curr.amount, 0)
// }));
    
// console.log(stats);




//  #7

// const stats = purchases.map(i => i.values.map(j => ({
//     category: j.category, 
//     amount: j.amount
// })))
// .flat()
// .reduce((acc, curr) => {
//     const existent = acc.find(o => o.category === curr.category);
//     if (existent === undefined) {
//         acc.push({
//             category: curr.category,
//             amount: curr.amount,
//         });
//     } else {
//         existent.amount += curr.amount;
//     }
//     return acc;
// }, []);

// console.log(stats);




//   #8

// function filterByCategory(arr, str) {
//     const filtered = arr.filter(i => i.category === str);
//     return filtered;
// }

// const purchase = [
//     {id: 1, date: '01.01.2020', amount: 2000, category: 'auto'},
//     {id: 2, date: '01.01.2020', amount: 3000, category: 'food'},
//     {id: 3, date: '01.01.2020', amount: 300, category: 'beauty'},
//     {id: 4, date: '03.01.2020', amount: 3000, category: 'auto'},
//     {id: 5, date: '03.01.2020', amount: 30000, category: 'travel'},
//     {id: 6, date: '04.01.2020', amount: 3000, category: 'food'}
// ];
// const result = filterByCategory(purchase, 'auto');
// console.log(result);

