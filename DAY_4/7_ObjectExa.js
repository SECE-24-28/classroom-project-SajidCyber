let student=[{sna:"Praveen", age:19, sma:90 , fee:true},
    {sna:"Ajith", age:18, sma:98, fee:false},
    {sna: "Surya" , age:20, sma:38, fee:true}
]
 
let newStu = student.every((stu)=>{
    return stu.fee == false
})
console.log(newStu);   // false


let students=[{sna:"Praveen", age:19, sma:90 , fee:true},
    {sna:"Ajith", age:18, sma:98, fee:false},
    {sna: "Surya" , age:20, sma:38, fee:true}
]
 
let newStus = students.some((stu)=>{
    return stu.fee == false
})
console.log(newStus);  // true
