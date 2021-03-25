// let city: string;
// city = "Київ";
// city = "Львів";
// let adress: string = city;
// console.log(adress);

// let number: number = +prompt('Введіть число');
// console.log(number == 0 ? 'Число 0' : number % 2 == 0 ? 'Число парне' : 'Число не парне');

// function maxNumber(a: number, b: number, ...arg: number[]): number {
//     if (arg.length > 0) {
//         arg.push(a, b);
//         return Math.max.apply(null, arg);
//     }
//     return Math.max(a, b);
// }
// console.log(maxNumber(32, 13, 242));

// function getSqrt(num?): string {
//     if (num == null) {
//         return 'Будь ласка , введіть число!'
//     }
//     if (isNaN(num) || num == false || num == true) {
//         return 'Повинно бути числове значення'
//     }
//     if (num < 0) {
//         return 'Введіть додатнє число'
//     }
//     return `Квадратний корінь ${num} = ${Math.sqrt(num)}`
// }

// console.log(getSqrt());