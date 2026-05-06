

class Empty{} //this is an empty class with no properties or methods. its allowed in typescript and it can be used as a 
//    type for variables or function parameters. it is also compatible with any other type because it has no requirements.
  


function myfunction( arg:Empty){
    console.log('hi');
}


myfunction(5);  //hi

myfunction({k:5});//hi

myfunction(new Empty());//hi

//By default, class Empty {} is compatible with everything, because it has no requirements.
//That’s why myfunction(5) and myfunction({k:5}) work.
//Add a private marker property if you want stricter behavior.///


//As we discussed, a class with no members is structurally empty, so any value fits.

//TypeScript only cares about the "shape" → since Empty requires nothing, everything passes.

//Unless you add a private/protected marker, TypeScript can’t distinguish it from other shapes.


//Empy Interfaces


interface Empty {}

function myfunction2(arg: Empty) {
  console.log("hi");
}

myfunction2(5);        // ✅ Allowed
myfunction2({ k: 5 }); // ✅ Allowed