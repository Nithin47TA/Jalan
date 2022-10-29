 //if no new array is allowed
 var example = [2, 4, 6, 8, 10,11,12]
 var temp=[]
 var index=0;
 for(let i=0;i<example.length/2;i++){
    example.splice(index,0,example.pop())
    index=index+2
 }
console.log(example)

/*
Time  Complecity : O(N^2)
Space Complecity : O(N)
Input : [1,2,3] [2,6,8,10,22]
*/

//else
index=0;
var end = example.length-1
for(let i=0;i<example.length;i++){
    if(i%2===0)
        temp[i]=example[end-index]
    else
        temp[i]=example[index++]
}
example = temp

/*
Time  Complecity : O(N)
Space Complecity : O(N)
Input : [1,2,3] [2,6,8,10,22]
*/
