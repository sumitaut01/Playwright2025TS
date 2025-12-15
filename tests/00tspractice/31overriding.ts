

export class parent{

     name(rate:number):number {
        return rate;
    }

 }
 //outside function is allowed
 //when inside class bosy , we have to omit "function" keyword
 function test()
 {


 }


export class child extends parent{
      name(rate:number):number {
        return rate*10;
    }
 }

