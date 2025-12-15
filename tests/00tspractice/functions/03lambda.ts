// => fat arrow , arow 

let ss=(params1:number) =>
    {
        console.log(params1)
    }
    ss(2);


    // if we have only 1 return then curly is optional
    let xy=(a:number,b:number):number=>{
      return a+b;  
    }

    //same as

let xz=(a:number,b:number):number=>a+b;  
xz(1,2);
    