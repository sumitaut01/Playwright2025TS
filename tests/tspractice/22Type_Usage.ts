

//1
type ID=number|String;

function func1(x:ID){

    if(typeof x==='number'){
        console.log("number");
    }

    else if(typeof x==='string') {
      console.log("String");
    }

}


func1(2);
func1('sagar');

// number
// String


//2

type data={
age:number;
name:String;
};

function func2(y:data){
  console.log(y.age);
  console.log(y.name);
}

func2({ age:35,name:"Sumit"});
// 35
// Sumit


//export when we use it makes possible to use same types, intterfaces name useful
//else it will say fun1 exists in file 2 also
//alternative is namespace, which is not recommeded as per docs

//Extending a type via intersections
export type Animalx = {
  name: string;
}

type Bearx = Animalx & { 
  honey: boolean;
}

function getBear(): Bearx {
  return { name: "Baloo", honey: true };
}


const bear = getBear();
bear.name;
bear.honey;