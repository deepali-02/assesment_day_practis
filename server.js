const express = require("express")
const patients = require("./patients.json")
const app = express()

const port = 4000

app.get("/patients", (req,res)=>{
    res.send(patients)
})

app.get("/dailyExercise/:exercise", (req,res)=>{
    const filterByExercise = patients.filter(patient=> patient.dailyExercise === req.params.exercise)
    res.send(filterByExercise)
})

app.get("/patients/:id",(req,res)=>{
    const findById = patients.find(patient=> patient.id === parseInt(req.params.id))
    res.send(findById)
})

app.get("/fullNameAndId",(req,res)=>{
    const mapFullNameAndId = patients.map(patient=> `Full Name: ${patient.firstName} ${patient.lastName} Id: ${patient.id}`)
    res.send(mapFullNameAndId)
})

app.listen(port, ()=> console.log(`Hello Dipali. Listening to port ${port}`))