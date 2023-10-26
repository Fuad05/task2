const arr1=['Ulfat','Rovshen','9','Ulfat','9',undefined,'ulfat']
const arr2=['some','Murad','7','Murad','91',false,'Murad']
//1 
// console.log(arr1.concat(true,false,null))
// //2
// console.log(arr2.concat(arr1))
// //3
// console.log(arr1.slice(1,2))
// console.log(arr1.slice(5,6))
// //4
//  console.log(arr1.filter((item)=>typeof item=="string"))
// //5
// console.log(arr1.filter((item)=>item=="Ulfat"))
//6
// console.log(arr1.find((item)=>item.indexOf(1)))
//7
//  console.log(arr1.findIndex((item)=>item=="9"))
//8
//  console.log(arr1.lastIndexOf("9"))
// 9
// console.log(arr2.indexOf('Murad'))
// // 10
// console.log(arr2.lastIndexOf('Murad'))
// 11
// let username='kEnaN'
// // console.log(username.toUpperCase().slice(0,1)+username.toLowerCase().slice(1))
// console.log(username.split("").map((item)=>{
//     if(item=="E"){
//     return item="A"
//     }
//     else{
//         return item.toLowerCase()
//     }
// }).join(""))
// console.log(username)
// 12
// const fullName = "Fuad Fuadli"
// console.log(fullName.split(' '))
// 13
// const list=['Leman','Oruc']
// console.log(list.join(' '))
// console.log(arr1.includes('Rovshen'))
// if(!arr2.includes('92')){
//     arr2.push("92")
// }
// console.log(arr2)