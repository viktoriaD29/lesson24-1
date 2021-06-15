//input: obj, number
//output: string

//algo:
//1. зчитуєм яка дата в date
//2. додаємо цей день тижня до days
//3. виводимо відповідний елемент по індексу

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();

  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
};
const result = dayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);
