
type DataStore<T>={
[key:string]:T
}



let dataStore:DataStore<string|number>={
    'name':'sumit',
    'age':35
}