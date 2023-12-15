let arr=[1,5,7,9,12,10,5]
let b=[1,arr]

// console.log(b)  
// //console.log(b.length)  //=> 2
// //console.log(b[1][4])  //=> 12

// let c=[100,[...arr]]
// console.log(c.length) // => 2
// console.log(c)
// console.log(c[2])  //=>undefined
// console.log(c[1][2]) //=>  7



let ob={fname:"Abhi",
        lname:"Devkar",
        movie:"OnePiece",
        cast:{
            hero:"Rohit",
            heroin:"Robin",
            villain:"Raj"
        }
       }

// let ob1=ob // this is two references and it sub key obj (cast) another jason obj it only get reference this is shallow copy
// console.log(ob1)

// let obj2={...ob}// spread operator
// console.log(obj2.cast.hero); // example of shallow copy ANS:- Rohit
// obj2.cast.hero="abhi"
// console.log(ob.cast.hero,obj2.cast.hero)// abhi abhi 

// let obj3={...ob,cast:{...ob.caste}}// deep copy
// obj3.cast.hero="abhi"
// console.log(ob.cast.hero,obj3.cast.hero)// Rohit abhi 


