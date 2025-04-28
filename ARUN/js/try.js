// function sum(){
//     a=Number(document.getElementById('a').value)
//     b=Number(document.getElementById('b').value)
//     c.value=a+b
//     console.log(a+b)
// }
// var he=document.getElementById('he')
// var img=document.getElementById('img')
// var p=document.getElementById('p')

// function dh(){
//      he.style.innerHTML="dhoni"
// }


function rect(l,w){
     console.log("length :" +l)
     console.log("width " +w)
     console.log(l*w)

}
rect(2,3)
console.clear()
 


function mini(v){
     let min=v[0]
     for(let num of v)
     {
          if(num<mini)
          {
               min=num;
          }
     }
     return min;
}
let number=[30,40,50]
console.log(mini(number))

function str(n){
     let stars="*".repeat(n)
     console.log(stars)
}
str(4)

let n=30
for(i=1 ;i<n; i+2)
console.log(n)
i--