

class test{

    static name:string;
    age:number=30;// we we dont initialised, it says u havent intitalised or have added costructor



    constructor(age:number,name:string){

        this.age=34;
       // this.name="sumit";// again static field access vis this is not right... test.name will work

       test.name=name;
    }

}