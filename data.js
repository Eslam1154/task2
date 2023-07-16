const fs = require('fs')
const addPerson = (id, fname , lname , age , city)=>{
    const allData = loadData()
    const duplicatdData = allData.filter((obj)=>{
        return obj.id === id 
    })
    console.log(duplicatdData)
    if(duplicatdData.length == 0 ){
    allData.push({
        id,
        fname,
        lname,
        age,
        city
    })
    saveAllData(allData)
    }
    else{
        console.log("Error Duplicated")
    }
}
const loadData= ()=>{
    try {
    const dataJson = fs.readFileSync("data.json").toString()
    return JSON.parse(dataJson)
    } catch {
        return []
    }
    
}
const saveAllData = (allData)=>{
        const saveAllDataJson = JSON.stringify(allData)
        fs.writeFileSync("data.json",saveAllDataJson)     
}

const deletData = (id)=>{
    const allData =loadData()
    const dataToKeep = allData.filter((obj)=>{
        return (obj.id !== 4 && obj.id!==6)
    })
    // console.log(dataToKeep)
    saveAllData(dataToKeep)
}

const listData=()=>{
    const allData = loadData()
    allData.forEach ((obj)=>{
        console.log(obj.fname,obj.lname,obj.city)
    })
}
const readData = (id)=>{
    const allData = loadData()
    const itemNeeded = allData.filter((obj)=>{
        return obj.id == id
    })
        console.log(itemNeeded)
}
module.exports= {
    addPerson,
    deletData,
    listData,
    readData

}
