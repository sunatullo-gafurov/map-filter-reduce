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

// function findDateWithMaxNumberOfPurchase(arr) {
//     const mapped = arr.map(i => ({
//         date: i.date,
//         numOfPurchase: i.values.length
//     }));
//     let max = 0;
//     let returnDate; 
//     for (const elem of mapped) {
//         if (max < elem.numOfPurchase) {
//             max = elem.numOfPurchase;
//             returnDate = elem.date;
//         }
//     }
//     return returnDate;
// }

// const result = findDateWithMaxNumberOfPurchase(purchases);
// console.log(result);




//  #2

// function findDateWithMaxPurchase(arr) {
//     let max = 0;
//     let returnDate;
//     for (const elem of arr) {
//         let sumOfPurchases = elem.values.reduce((acc,curr) => acc + curr.amount, 0);
//         if (max < sumOfPurchases) {
//             max = sumOfPurchases;
//             returnDate = elem.date;
//         }  
//     }
//     return returnDate;
// }

// const result = findDateWithMaxPurchase(purchases);
// console.log(result);



// #3


// function mostExpensive() {
//     return   arr.map(i => i.values.map(j => j.amount))
//                 .flat()
//                 .reduce((acc, curr) => acc < curr ? curr : acc);
// }
// const result = mostExpensive(purchases);
// console.log(result);



//  #4

// function categoryWithMaxSpent(arr) {
//     const mapped = arr.map(i => i.values.map(j => ({
//                     category: j.category, 
//                     amount: j.amount
//                 }))).flat();
//     const obj = {};
//     for (const item of mapped) {
//         if (obj.hasOwnProperty(item.category)) {
//             obj[item.category] += item.amount;
//         } else {
//             obj[item.category] = item.amount;
//         }
//     }
//     let max = 0;
//     let returnCategory;
//     for (const key in obj) {
//         if (max < obj[key]) {
//             max = obj[key];
//             returnCategory = key;
//         }    
//     }
//     return returnCategory;
// }

// const result = categoryWithMaxSpent(purchases);
// console.log(result);




//   #5

// function averageSpent(arr) {
//     const amounts = arr.map(i => i.values.map(j => j.amount)).flat();
//     return amounts.reduce((acc, curr) => acc + curr) / amounts.length;
// }

// const result = averageSpent(purchases);
// console.log(result);




//   #6

// function statisticsDate(arr) {
//     const stats = arr.map(i => ({
//         date: i.date,
//         amount: i.values.reduce((acc, curr) => acc + curr.amount, 0)
//     }));
//     return stats;
// }

// const result = statisticsDate(purchases);
// console.log(result);




//  #7

// function statisticsCategory(arr) {
//     const mapped = arr.map(i => i.values.map(j => ({
//         category: j.category, 
//         amount: j.amount
//     }))).flat();

//     const obj = {};
//     for (const item of mapped) {
//         if (obj.hasOwnProperty(item.category)) {
//             obj[item.category] += item.amount;
//         } else {
//             obj[item.category] = item.amount;
//         }
//     }

//     const stats = [];
//     for (const key in obj) {
//         stats.push({category: key, amount: obj[key]});   
//         }
//     return stats;
// }


// const result = statisticsCategory(purchases);
// console.log(result);




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

