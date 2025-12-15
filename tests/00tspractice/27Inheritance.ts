

export class parent{
id:number=4;


}


class child extends parent{

constructor(){
super();   // if we dont use it then ts will give error 
console.log("inside child const");
}



}

const cc=new child();//inside child const