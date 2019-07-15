console.log('Here is : ', 'array')



/*
1
Correct the syntax error
we need to correct comma and identify of array with var and add bracket
 var unm=[ 1,7 , 9 , 45 ]

 var name=["Str", "alex","moh"]

 var str=['the','fox', 'over', lazy, 'dog' ]

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
banana-> 1
tomato ->0
*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)

*/
var food=['mansaf','burg', 'pizza', "mqlooba", 'mansf2' ]
var sport=['footbal','basket ball', 'teniss' ]
var movie=['code',"charnoble", 'saw', "Jouza", 'zaal' ]
console.log("favorite food" ,food)
console.log("favorite sport",sport)
console.log("favorite movie" ,movie)


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/  
// var a=[1,4,5];
//var b=["t","u","g","x"];
function firstOfArray(x){
 
   
return x[0];
}
console.log(firstOfArray([1,4,5]))
console.log(firstOfArray(["t","u","g","x"]))
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(x){
    return x[(x.length-1)]
}
console.log(lastOfArray([1,4,5]))
console.log(lastOfArray(["t","u","g","x"]))
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
array.shift();

array.shift();
array.shift();

array.unshift(8);
array.unshift(6);
array.unshift(4);
array.unshift(3);
array.unshift(1);
array.push(10);
console.log(array);
// console.log(array[2],[3])
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5]
array2.push(8);
console.log(array2);
console.log("when we do push it return new lenght to array afterpush will be 5") 
array2.pop();
console.log(array2);
console.log("when we do pop it return the element deleted 8") 
array2.shift();
console.log(array2);
console.log("when we do shift it return the element deleted at first element 5") 
array2.unshift(5)
console.log(array2);
console.log("when we do unshift it return new lenght to array after unshift will be at first 5")
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
var x=[1,4,5];
var w=["t","u","g","x"];
function middleOfArray(a){
if(a.length%2===0){
    return a[(a.length/2)-1]+" and "+a[(a.length)/2]
    
}
else 
return a[(a.length-1)/2]
}
console.log(middleOfArray(x))
console.log(middleOfArray(w))

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
animals.length=(animals.length-1);
animals [0]="zebra";
animals [1]="elephant"
console.log(animals)

var nums= [1,2,3,8,9]
nums[0]= 5;
nums[1]=-22;
nums[2]= 3.5;
nums[3]=44;
nums[4]=98;
nums[5]=44;
console.log(nums)

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
var nums= [1,2,3,8,9]
function indexOfArray(a,b){
return a[b]
}
console.log(indexOfArray(nums,3))
console.log(indexOfArray(nums,1))
console.log(indexOfArray(nums,4))
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
var nums= [1,2,3,8,9] 
function arrayExceptLast(a){
a.length=a.length-1
    return a
  
      
}
console.log( arrayExceptLast(nums))
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
var nums= [1,2,3,8,9]

function addToEnd(a,b){

 a[a.length]=b;
return a;
}
console.log(addToEnd(nums,55))
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var nums= [1,2,3,8,9]
function sumArray(a)
{
    var sum=0
for (var i = 0; i < (a.length); i++) {
   sum=sum+a[i];
}
return sum;
}
console.log(sumArray(nums))

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9]
function minInArray(a){
var min=a[0];
for(i=1;i<a.length;i++)
{
if (min>a[i]) {
min=a[i];    
}
}
return min;
}
console.log(minInArray([9,5,1,2,6,0]))
console.log(minInArray(nums))
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9]
function removeFromArray(a,b){
for(i=0;i<a.length;i++){
   if (a[i]===b){
       a.splice(i,1);
   }
}
return a;
}
console.log(removeFromArray(nums,8))
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9]
function oddArray(a){
    for(i=0;i<a.length;i++){
        if (a[i]%2===0){
            a.splice(i,1);
        }
     }
     return a;
     

}
console.log(oddArray(nums))
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9]
var nums2= [1,2,3,8,9,77]
function aveArray(a) {
    var avg=0
    for (var i = 0; i < (a.length); i++) {
       avg=avg+a[i];
    }
    return avg/(a.length);
    }  
    
console.log(aveArray(nums))
console.log(aveArray(nums2))
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
function shorterInArray(a){
    var short= a[0]
    for (var i = 1; i < (a.length); i++) {
      if(a[i].length<short.length)
      short=a[i];

     }

return short
}
console.log(shorterInArray(strings))

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var string= "alex mercer madrasa rashed2 emad hala"
function repeatChar(a,b){
var count=0;
for (var i = 0; i < (a.length); i++) {
    if(a[i]===b)
    ++count;

   }
return count

}
console.log(repeatChar(string,"a"))
console.log(repeatChar(string,"z"))
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var strings= ["alex","mercer","madrasa","rashed2","emadm","hala"]
function evenIndexOddLength( a)
{
    var str=[];
    var r=0
    for (var i = 0; i < (a.length); i=i+2) {

 // we try to modify to know our solution true or false

if (((a[i].length)%2)!==0){
    str[r]= (a[i]);
    r=r+1;
}
    }

return str
}

console.log(evenIndexOddLength(strings))
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [44, 5, 4, 3, 2, 10]
function powerElementIndex (a)
{ var str=[];
for(i=0;i<a.length;i++)
{
str[i]=a[i]**i;

}
return str;

}
console.log(powerElementIndex(nums))


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
function evenNumberEvenIndex(a){
var str=[];
var r=0;

for(i=0;i<a.length;i=i+2){
    if((a[i]%2)===0){
    str[r]=a[i];
    r=r+1;
    }
}

return str;



}
console.log(evenNumberEvenIndex(nums))