var b = {
    name: "leanr java",
    isbn: "123-abc",
    display: function () {
        console.log("method implemented");
    }
};
console.log(b); //{ name: 'leanr java', isbn: '123-abc' }
b.name = "name changed";
//b.isbn="456";//can not assign to 'isbn' because it is a read-only property.
