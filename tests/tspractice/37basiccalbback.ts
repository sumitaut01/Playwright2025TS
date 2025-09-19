
//Basic
function demo(name:string,callback){
    console.log("hi "+name);
    callback();
}

function welcome(){
  console.log("Welcome brother");
}

demo("sumit",welcome);
//hi sumit
//Welcome brother



//2Asyn
function newfunc(name:string,callback){
    setTimeout(function()
    {
        console.log(name);
    },3000
    )
    console.log("hi "+name);
    callback("some text");
}


function some(msg:string){
  console.log("Welcome brother");
}

newfunc("Neha",some);

//hi Neha
//Welcome brother
//Neha



