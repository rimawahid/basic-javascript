//var number = parseInt(prompt("Enter a number"));

// if (number > 0) {
//     console.log("Positive")
// }else{
//     console.log("Negative")
// }

// number > 0 ? console.log("Positive") :  console.log("Negative");


// const result = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
// console.log(result);

//তিনটি সংখ্যার মধ্যে বৃহত্তম সংখ্যা নির্নয় করার জন্য প্রোগ্রাম করতে হবে। এবং সেটা টারনারি অপারেটর ব্যবহার করে করতে হবে.


 let num1 = parseInt(prompt("Enter Your first number"));
 let num2 = parseInt(prompt("Enter Your second number"));
 let num3 = parseInt(prompt("Enter Your third number"));

//  if(num1 > num2 && num3){
//      console.log("The biggest number :", num1);
//  }
//  else if(num2 > num1 && num3){
//     console.log("The biggest number :", num2);
//  }
//  else{
//     console.log("The biggest number :", num3)
//  }

const result = num1 > num2 && num3 ? console.log("The biggest number :", num1) : num2 > num1 && num3 ? console.log("The biggest number :", num2): console.log("The biggest number :", num3);


