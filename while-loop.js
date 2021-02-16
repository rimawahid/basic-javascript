// write a program that will print sum of all the numbers that are divisible by 3 and 5 from 1-100

var i = 1;
var sum = 0;
 while (i<= 200){
     if(i%3==0 && i%5==0){
         console.log(" "+i);
         sum = sum +i;
     }
     i++;
 }
 console.log( "result:",sum)


