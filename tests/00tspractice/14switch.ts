

//below is the example of switch statement in typescript which is similar to java or c# switch statement but with some differences like we can use string or number as case values and we can also use default case to handle cases which are not matched with any of the case values.

let day:number=3;   
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");     
        break;
    case 3:
        console.log("Wednesday");   
        break;
    case 4:
        console.log("Thursday");        
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

        
