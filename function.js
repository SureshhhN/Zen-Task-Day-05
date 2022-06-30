Functions :

//1. a. Print odd numbers in a array :

var nums = [1,2,3,4,5,6,7,8,9,10]
var oddnums = []
var oddnumber = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums [i] % 2 === 1)
        oddnums.push(nums[i])
    }
    return oddnums
}
console.log(oddnumber(nums))


//1. b. Convert all the strings to title caps in a string array :

function abc() {
    abc = abc.toLowerCase().split(' ');
    for (var i = 0; i < abc.length; i++) {
      abc[i] = abc[i].charAt(0).toUpperCase() + abc[i].slice(1); 
    }
    console.log(abc.join(' '));
    }("HI GUVI")
  
  
//1. c. Sum of all numbers in an array :
  
  function sum() {
   var s = 0 ;
   for (var n of sum)
  {
      s += n ;
  }
      console.log(`Sum of all numbers is ${s}`)
  
}([5,10,15,20,25])


//1. d.Return all the prime numbers in an array :

var s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 var primenums=function(s) 
   {
s = s.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
return s
}
console.log(primenums(s));


//1. e. Return all the palindromes in an array :

 var string=["helloe", "poppin", "guvvi"]
 var char
 var stringarr=[]
 var palindromes =[]
 var palindromeslist=function(string)
 {
   for(var i=0;i<string.length;i++)
 {
   char=[...string[i]]
   for(var j=0;j<char.length;j++)
   {
     if(char[j]===char[char.length-1-j])
     {
       var first_string=char[j]
         stringarr.push(first_string)
     }       
   }
   var join=stringarr.join("")
   palindromes.push(join)
   stringarr.splice(0, stringarr.length);  
  }
  return palindromes
 }
 
 console.log(palindromeslist(string));


//1. f. Return median of two sorted arrays of the same size :

var arr1 = [2,4,6,8,10,14];
var arr2 = [7,13,27,32,56,66];
var arr1 = [...arr1, ...arr2]
var sortedarr = function(arr1) {
    var value = arr1.length / 2
    var a1 = arr1[value - 1]
    var a2 = arr1[value]
    var median = (a1 + a2) / 2
    return median
}
console.log(sortedarr(arr1))


//1. g. Remove duplicates from an array :

const t1 = [2,4,6,2,4,8];
var remodup = function(t1) {
    let duparr = [];
    for (let i of t1) {
        if (duparr.indexOf(i) === -1) {
            duparr.push(i);
        }
    }
    return duparr;
}
console.log(remodup(t1));


////3.  Arrow functions :

////3. a. Print odd numbers in an array :

var number = [2, 3, 4, 1, 51, 6, 7]
var oddno = []
var oddnumber = (number) => {
    for (var i = 0; i < number.length; i++) {
        if (number[i] % 2 === 1)
            oddno.push(number[i])
    }
    return oddno
}
console.log(oddnumber(number))


////3. b. Convert all the strings to title caps in a string array :

const(str) => {

    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    console.log(str.join(' '));
  }("HELLO GUVI");


////3. c. Sum of all numbers in an array :

var arr = [5, 4, 6, 7]
var sum = 0;
var sumofnum = (arr) => {
    for (var i = 0; i < arr.length; i++)
        sum = sum + arr[i]
    return sum
}
console.log(sumofnum(arr) 


////3. d. Return all the palindromes in an array :

var string=["none", "hectic", "guvvi"]
 var char
 var stringlist=[]
 var palindromes =[];
var palindromeslist=(string)=>{
   for(var i=0;i<string.length;i++)
 {
   char=[...string[i]]
   for(var j=0;j<char.length;j++)
   {  
     if(char[j]===char[char.length-1-j])
     {
       var first_string=char[j]
         stringlist.push(first_string)
     }   
   }
   var join=stringlist.join("")
   palindromes.push(join)
   stringlist.splice(0, stringlist.length);
  }
  return palindromes
} 
 console.log(palindromeslist(string))


////3. e. Return all the prime numbers in an array :

var numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var primeno=(NumArray)=>{
   numarr = numarr.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
return numarr
   }
   console.log(primeno(numarr));