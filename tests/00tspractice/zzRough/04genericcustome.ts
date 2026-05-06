

//below is the custom generic type which is similar to record type but we can use it for any type of value not just string
// we are defining a custom generic type called DataStore which is an object type where the keys are 
// of type string and the values are of type T. The T is a generic type parameter that can be replaced with any 
// type when we use the DataStore type. In this case, we are using it with a union type of string and number, 
// which means that the values in the dataStore object can be either string or number.
//more of like genrics in java or c# where we can define a class or interface with a generic type
//  parameter and then use it with different types when we create instances of the class or interface.

type DataStore<T>={
[key:string]:T
}



let dataStore:DataStore<string|number>={
    'name':'sumit',
    'age':35
}