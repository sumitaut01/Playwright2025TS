


//let str = 'it's a test'; //error: Unterminated string literal. Did you mean to use a backslash to escape the single quote?

let str1 = 'it\'s a test'; // no error: The backslash is used to escape the single quote, allowing it to be included in the string literal without causing a syntax error.


let str2 = `it's a test`; // no error: Template literals (enclosed in backticks) allow for the inclusion of single quotes without needing to escape them, making it easier to write strings that contain single quotes.