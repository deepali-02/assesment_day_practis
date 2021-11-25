const axios = require("axios")

/*async function patienData(){
   try{
        const url = "http://localhost:4000/patients"
    console.log("waiting")
    const response = await axios.get(url)
    console.log(response.data)
   } catch(error){
       console.log(error.message)
   }
}

console.log("before")
//patienData()
console.log("Output is here")*/


const dailyExercise = async ()=>{
    const url = "http://localhost:4000/dailyExercise/yes"
    console.log("waiting")
    const response = await axios.get(url)
    console.log(response.data)
} 

console.log("before")
dailyExercise()
console.log("Output is here: ")

const findById = async ()=>{
    const url = "http://localhost:4000/patients/2405"
    console.log("waiting")
    const response = await axios.get(url)
    console.log(response.data)
}
console.log("before")
findById()
console.log("Output is here: ")