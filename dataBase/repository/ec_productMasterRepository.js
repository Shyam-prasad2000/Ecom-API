const ec_productMaster = require("../models/ec_productMaster")


async function insertIntoProductMaster(reqData){
    try{
       return( await ec_productMaster.create(reqData));
    }catch(err){
        throw(err)
    }
}
async function getProductionMaster(reqData){
    try{
        return(await ec_productMaster.find().limit(5).skip(2))
    }catch(err){
        throw(err )
    }
}

module.exports={
    insertIntoProductMaster:insertIntoProductMaster,
    getProductionMaster:getProductionMaster
}