let student={
    sna:"Praveen", age:19, demo:function(){
        console.log("Hai I m" +this.sna);
    }
}

student.demo();
//------------------------------------------------------------
let student2={
    sna:"Prabhum", age:29, samp:()=>{
        console.log("Hai I m" +this.sna)
        console.log("Hai I am" + student2.sna)
        
    }
}
student2.samp();