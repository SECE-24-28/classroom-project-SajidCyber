let student=[{ sna:"Praveen", age:19, sma:90, fee:true},
    {sna:"Ajith", age:18, sma:98, fee:false},
    {sna:"Surya", age :20, sma:84, fee:true}
]

//console.log(student);
student.forEach((stu)=>{
    console.log(stu.sna + " " + stu.age);
})