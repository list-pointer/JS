// let person={
// name:"Abhishek",
// age:23}

// function logData()
// {
// let str=" is 35 years and lives in norway";
// console.log(person.name+str);
// }

// logData();

// let color=["red","blue","green"];
// console.log(random.())

// let myLeads=`["hello"]`;

// myLeads=JSON.parse(myLeads);
// myLeads.push("hii");
// myLeads=JSON.stringify(myLeads);
// console.log(typeof myLeads);

// var scope is function
// const scope is block
// let scope is block

// // objects -->
// let people={
// name:"Abhsihek",
// showData:function(){
// 	// console.log("Hello")
// 	console.log(this)
// }
// // showData1 ()
// // {
// // console.log("Hii")
// // }
// };

// const fun1=people.showData;
// console.log(fun1);
// fun1();

// const showData=people.showData; //this block will call the showData function
// console.log(showData); //from above since it will look for the object fnt however in
// showData(); //react strict mode is enabled and will give output as undefined.

// the above problem can be solved using bind function where the values
// is based on the argument passed.
// in this case peopleobject
// const showData=people.showData.bind(people); //this block will call the showData function
// console.log(showData); //from above since it will look for the object fnt however in
// showData();

// },

// showData1 ()
// {
// console.log("Hii")
// }

// }

// people.showData();
// people.showData1();

// console.log(people["name"])

// const nameExtra ="Abhishek Gupta"
// people["name"]=nameExtra

// console.log(people.name)

//callback function
// const talk={
// 	talkFun()
// 	{
// 		setTimeout(function(){

// 			console.log("this",this)},1000)
// }
// };

// talk.talkFun(); //this will give us window object because call back function is a stand alone function
//and will return window

//for solving this use arrow functions

// const talk={
// 	talkFun()
// 	{
// 		setTimeout(() =>{

// 			console.log("this",this)},1000)
// }
// };

// talk.talkFun();

//output
// [Function: bound showData]
// { name: 'Abhsihek', showData: [Function: showData] }
// this { talkFun: [Function: talkFun] }

// map method
// colors =["red","green","blue"];

// colors.map((color) => {
// console.log(color);
// });

// the above can also be written as
// colors.map(color => console.log(color));

// object destrcurig

// let people={
// 	name:'Abhsihek',
// 	sName:'Gupta',
// 	gender:'Male'
// };

// const name=people.name;
// const sname=people.sName;

// // the above can be done using the followimg syntx
// const {name,sName}=people;
// console.log(name,sName)

//using alias
// const {name:nm,sName:sn}=people;
// console.log(nm,sn)

//spread operator

// const first=[1,2,3]
// const second =[4,5,6]

// const combined =[...first,..second];
// const combined1=first.concat(second);

// const combined2=['a',...first,..second];

// same can be used for objects and cloning objects and arrays

// class

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   showData() {
//     console.log(this.name);
//   }
// }

// const p = new Person("Abhishek");
// p.showData();

//inheritance

class Person {
  constructor(name) {
    this.name = name;
  }
  showData() {
    console.log(this.name);
  }
}

class Children extends Person {
  constructor(name,age) {
    super(name);
    this.age = age;
  }
  childData() {
    console.log(this.age);
  }
}

const p = new Children("Abhishek", 15);
p.showData();
p.childData();
