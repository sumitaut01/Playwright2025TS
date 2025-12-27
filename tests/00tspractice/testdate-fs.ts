import { addMonths, format } from "date-fns";



const date=format(new Date(),'dd-MMM-yyyy');//15-Dec-2025
console.log(date);//

console.log(format(addMonths(new Date,1),'dd-MMM-yyyy'));