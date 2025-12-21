
//reduce

const markscc=[1,2,3,4];

let sum=0;
markscc.reduce((sum,mark)=>sum+mark,0);


//filter
console.log('---separator---');
const filtered=markscc.filter(item=>item%2===0);
console.log(typeof(filtered));//object
console.log(filtered);//[2,4]




//map
console.log('---separator---');
console.log(markscc.map(item=>item*2));//object
console.log(typeof(markscc));//[ 2, 4, 6, 8 ]




//sort string
const namesff=["sumit","amit",'neha'];
console.log(namesff.sort()); //


//sort number.. sort() fails on number
//custome logic below

const numss=[1,3,4,0,7];
numss.sort(((a,b)=>a-b));





