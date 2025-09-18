function printIdxx(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}


console.log(printIdxx(2));
console.log(printIdxx("sumit"));
// 2
// undefined   //because function does not return anything
// SUMIT
// undefined