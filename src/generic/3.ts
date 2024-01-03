/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<Gen1 extends {}, Gen2>(objA: Gen1, objB: Gen2): Gen1 & Gen2 {
  return Object.assign(objA, objB);
}

export {};
