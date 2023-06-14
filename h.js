// let b=20
// function abc()
// {
//     let a=10
//     function p()
//     {
//          console.log(a)
//     }
//     p();
// }
// abc();



// let count = 0;
// (function () {
//   if (count === 0) 
//   {
//     let count = 1;
//     console.log(count); 
//   }
//   console.log("b",count); 
// })
// ();


// for (var i = 0; i < 3; i++)
//  {
//     console.log("ww",i)
//     setTimeout(function log()
//      {
//       console.log(i,i);
//      }, 1000);
//     console.log("ajy",i)
//  }
//   console.log("bro",i)
//


//   let p=10
//   {
//     p=20
//   }
//   console.log(p)


// function outer(w)
// {
//      function b(h)
//      {
//         var l=h*w
//         console.log(l)
//      }
//      b(2)
// }
// outer(3);



// function area1(w,h)
// {
//      function b1(h)
//      {
//         var l=h*w
//         console.log(l)
//      }
//      b1(2)
// }
// area1(5,4);


// function calculateRectangleArea(length) {
//     function innerFunction(breadth) {
//       return length * breadth;
//     }
  
//     return innerFunction;
//   }
  
//   // output// 
//   const rectangleArea = calculateRectangleArea(9); // Outer function is called with the length parameter
//   const area = rectangleArea(15); // Inner function is called with the breadth parameter
//   console.log(area);

// function Sum(a){
//   function result(b)
//   {
//     return a*b
//   }
//   result(20);
// }
// Sum(10);

// function Sum(a){
//   function result(b)
//   {
//     return a*b
//   }
//   return result
// }
// let r=Sum(10);
// let r2=r(20)
// console.log(r2)

// function pureFunction(p)
// {
//   return p*p
// }
// pureFunction(10);
// pureFunction(15);
// pureFunction(10);

// function Impurefunction()
// {
//   let count=0;
//   function inner()
//   {
//      console.log(count++)
//   }
//   inner();
// }
// Impurefunction();
// Impurefunction();
// Impurefunction();
// Impurefunction();

// function Impurefunction()
// {
//   let count=0;
//   function inner()
//   {
//      return count+=1
//   }
//  return inner();
// }
// console.log(Impurefunction());
// console.log(Impurefunction());
// Impurefunction();
// Impurefunction();
// Impurefunction();

// function Impurefunction()
// {
//   var count=0;
//   function inner()
//   {
//      return count+=1
//   }
//  return inner;
// }
// let result=Impurefunction();
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());


// q=20
// function p()
// {
//   q=11
//   console.log(q++)
// }
// p();
// p();
// p();


//q1
// function counter(){
//     var counter = 0;
//     function IncreaseCounter() {
//         return counter += 1;
//     };
//     return IncreaseCounter;
// }
// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

//q2
// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

//q3
// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

//q4
// function calculateRectangleArea(length) {
//     function innerFunction(breadth) {
//       return length * breadth;
//     }
  
//     return innerFunction;
//   }
  
//   // output// 
//   const rectangleArea = calculateRectangleArea(9); // Outer function is called with the length parameter
//   const area = rectangleArea(15); // Inner function is called with the breadth parameter
//   console.log(area);


//q5

function a(c){

 function b(){
    c++;
    console.log(c)
 }
 b();
 b();
 b(); 
}a(3);
//q6
// var a = 12;
// (function () {
//   alert(a);
// })();

//q7
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })
// ();
// x();

//q8
// var globalVar = "xyz";
// (function outerFunc(outerArg) {
//     var outerVar = 'a';
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);
//     })(456);
// })(123);