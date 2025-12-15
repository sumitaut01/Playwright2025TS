interface MyWindow  {
  title: string;
}

interface MyWindow  {
  name: string;
}


const ddd: MyWindow  = {
  title: "My Page",
  name: "MainWindow"
};



console.log(ddd.name+ " "+ddd.name);



//type does not allow mergin

// A type cannot be changed after being created

// type Window = {
//   title: string;
// }

// type Window = {
//   ts: TypeScriptAPI;
// }

 // Error: Duplicate identifier 'Window'.
