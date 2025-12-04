let student=[{sna:"Praveen", age:19, sma:90 , fee:true},
    {sna:"Ajith", age:18, sma:23, fee:false},
    {sna: "Surya" , age:20, sma:38, fee:true}
]
 
let newStu=student.filter((stu)=>{
    return stu.sma>=35
})
console.log(newStu);