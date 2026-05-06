
// we are defining  record type which is a utility type in TypeScript that allows us to create an object type with a specific set of keys and values. In this case, we are creating a record type where the keys are of type string and the values are also of type string.
// The Record type is defined as follows:
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// }

            
let datax: Record<string,string>={
    'name':'sumit'
}
