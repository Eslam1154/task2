const yargs = require("Yargs")
const data = require("./data")
// const { describe } = require("node:test")

yargs.command({
    command:"add",
    describe:"to add an item",
    builder:{
        id:{
            describe:"to an id",
            demandOption:true,
            type:Number
        },
        fname:{
            describe:"to a first name",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"to a last name",
            demandOption:true,
            type:"string"
        },
        age:{
            describe:"to an age",
            demandOption:true,
            type:Number
        },
        city:{
            describe:"to a city",
            demandOption:true,
            type:"string"
        }
    },
        handler: (x)=> {
        // console.log("you have already added an item " )
        // console.log(x)
        data.addPerson(x.id,x.fname ,x.lname , x.age, x.city)
    }
})

yargs.command({
    command : "delete",
    describe : "to delete an item",
    handler : (x)=>{
        data.deletData(x.id)
        console.log("you have already deleted an item")
    }
})

yargs.command({
    command : "list",
    describe : "lsit data",
    handler : ()=>{
        data.listData()
    }
})

yargs.command({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this id description in read command",
            demandOption : true ,
            type : "string"
 
    }
},
handler : (x)=> {
    data.readData(x.id)
}
})
yargs.parse()
