// // // // Access Modifiers we have


// // // class in TypeScript

// // class Person{
// //     name:string
// //    private age:number
// //    score:number
// //     constructor(name:string, age:number, score:number){
// //         this.age =age;
// //         this.name =name
// //         this.score=score
// //     }
// //     getPerson(){
// //         return this.age;
// //     }

// //     getPersonScore(){
// //         return this.score;
// //     }
// // }

// // class NewPerson extends Person{
// //     constructor(name:string, age:number, score:number,email:string){
// //         super(name,age,score)
// //     }
// // }

// // let person =new Person('Peter',90,43,);
// // console.log(person.getPerson());
// // console.log(person.name)
// // // console.log(person.age)


// function App(a:number,b:number) {
//     return a  + b;
// }


// // App(12,67)



// // console.log(App(12,67))
// // console.log('Ndi uwa')
// // console.log('Nwa nna')
// // console.log('Ndi Nne')
// // console.log('Hello World')

// // // let promise = new Promise((resolve, reject) => {
// // //     if(true){
// // //         resolve("A promiseKept")
// // //     }else{
// // //         reject("A promise denied")
// // //     }
// // // })

// // // console.log(promise)
// // // console.time()
// // // console.timeEnd()

// // // promise
// // // .then((res) => {
// // //     console.log(res)
// // // })


// // const makeCall = (timer: number) => {
// //     setTimeout(() => {
// //         console.log(`I finsihed after ${timer/1000}seconds`)
// //     })
// // }

// // console.log(makeCall(5000));
// // console.log(makeCall(1000));
// // console.log(makeCall(2000));

// import prompt from 'prompt-sync';

// const pp = prompt();

// const login = () => {
//     const email = pp("Please enter your email: ");
//     const password = pp("Please enter your password: ");
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if (email === "kossy@gmail.com" && password === "kossy@gmail.com") {
//             resolve("User Auth is valid")
//         } else {
//             reject("User Auth failed")
//         }
//         }, 2000)
//     })
// };

// const HomePage = (userAuth: any) => {
//     return Promise.resolve(`Welcome back Home: ${userAuth}`);
// }

// login()


// // console.clear();
// // login().then((res)=> {
// //     console.log(res);
// //     return HomePage(res)
// // }).then((res) => {
// //     console.log(res)
// // }).catch((err: Error) => {
// //     console.log(err)
// // });

// // const myLoginAsync = async() => {
// //     const res = await login();
// //     console.log(`User Auth: ${res}`);
// //     const result = await HomePage(res);
// //     console.log(`You can go to Main screen now ${result}`);
// //     return result;
// // }

// // myLoginAsync();

// // console.log("Data");


