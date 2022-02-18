/*Create a human readable time format using the Date time object

1 - YYYY-MM-DD HH:mm
2 - DD-MM-YYYY HH:mm
3 - DD/MM/YYYY HH:mm*/

//1
const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1 //months start from 0
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes() 
console.log(`${year}-${month}-${date} ${hours}:${minutes}`) 


//2
const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1 //months start from 0
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes() 
console.log(`${date}-${month}-${year} ${hours}:${minutes}`) 

//3
const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1 //months start from 0
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes() 
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) 



