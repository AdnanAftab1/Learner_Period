let a=[1,3,-4,5,-9,4,-8];
b=a.filter((value,index)=>{
    return (value>=0);
});
console.log(a);
console.log(b);
c=a.map((value)=>{
    return value=value>=0?value:-value;
});
console.log(c);