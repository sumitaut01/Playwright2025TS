

//notice  export and export default
//below will be imported using import { add, subtract } from './01importexport';  ... notice the curly braces for named exports

export function add(a: number, b: number): number {
    return a + b;
}


export function subtract(a: number, b: number): number {
    return a - b;
}


export default function multiply(a: number, b: number): number {
    return a * b;
}
