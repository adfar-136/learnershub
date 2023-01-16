    // class hello{
    //     message(){
    //         console.log("Adfar")
    //     }
    //     sorry(){
    //         console.log("Sorry")
    //     }
    // }
    // let a = new hello()
    // a.message()
    // a.sorry()
 
    // class student{
    //     constructor(){
    //         let name;
    //         console.log("Constructor called")
    //     }
    //     hello(){
    //         console.log("Hello " + this.name)
    //     }
    // }
    // let a = new student()
    // a.name = "Adfar Baba"
    // a.hello()

    // class student {
    //     constructor(name, age){
    //         this.studentName = name;
    //         this.studentAge = age;
    //         console.log("constructor called")
    //     }
    //     hello(){
    //         console.log("hello " + this.studentName + " Your age is " +
    //         this.studentAge )
    //     }
    //     static add(){
    //         console.log("static function")
    //     }
    // }
    // let a = new student("Adfar", 25)
    // a.hello()
    // student.add()


    // class fruits{

    // }
    // class vegetables extends fruits{

    // }

    // let f =new fruits()
    // let v = new vegetables()
class employee{
    constructor(name){
        this.employeeName = name;
        console.log("Constructor : Employee")
    }
    info(){
        console.log("Employee name : " + this.employeeName)
    }
}
class manager extends employee{
     constructor(name){
        super(name)
        console.log("Constructor : Manager " )
     }
     info(){
        
        console.log("Manger name : " + this.employeeName)
        super.info()
       
     }
}

let b = new manager("Adfar rashid")
b.info()













