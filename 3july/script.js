// let student1={
//     name:"",
//     grade:"",
//     roll:""
// }
/////first Text capital
// function Student(name,grade,roll){
// this.name=name,
// this.grade=grade,
// this.roll=roll
// }

// let student1=new Student("ABC",'10','21')
// let student2=new Student("DEF",'15','25')

// console.log(student1);
// console.log(student2);
// console.log(this);

// let obj={
//     property:"value",
//     method:function(){
//         console.log(this);
//     },
// helperMethod: function(){
//     this.method();
// }
// }
// obj.helperMethod();
// let obj2={
// property1:"value2",
// }
// obj2.helperMethod()
// obj.method()

// function newMethod(){
//     console.log(this);
// }
// newMethod()
//for arrow function: kisi k sage nhi h

// let obj1={
//     property:"value",
//     method:()=>{
//         console.log(this);
//     },
//     helperMethod: function(){
//             this.method();
// }}

// obj1.()

let student={
    name:"student1",
    id:"s101",
    printInfo:function(){
        console.log(`Name:${this.name}`);
    }
}

// function printInfo(type){
//     console.log(`type of obj: ${type} , Name:${this.name}`);
// }
let teacher={
    name:"teacher1",
    id:"t101",
    printInfo:function(){
        console.log(`type of obj: ${this} , Name:${this.name}`);
    }
}
teacher.printInfo();
// printInfo.call(teacher,"teacher")
// printInfo.call(student,"student")