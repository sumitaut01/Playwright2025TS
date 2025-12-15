

interface Book{
    name:string;
  readonly  isbn:string

   //static data:string,//'static' modifier cannot appear on a type member.

     display():void;
}

let b:Book={
    name:"leanr java",
    isbn:"123-abc",
    

    display(){
        console.log("method implemented");
    }


}


console.log(b)//{ name: 'leanr java', isbn: '123-abc' }   //{ name: 'leanr java', isbn: '123-abc', display: [Function: display] }


b.name="name changed";
//b.isbn="456";//can not assign to 'isbn' because it is a read-only property.



class BookImpl implements Book{

    //interface properties must be decalred in class and initialised in cosbtructor
    //else it gives error
name:string;
isbn: string;

//constructor is not mandatory.
//if not cosntructor, we should  initialise properties by some way
constructor(name:string,isbn: string){
    this.name=name;
    this.isbn=isbn
}

display():void{


}
}