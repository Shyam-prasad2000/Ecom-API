const ec_productMaster = require("../dataBase/models/ec_productMaster");
const { insertIntoProductMaster, getProductionMaster } = require("../dataBase/repository/ec_productMasterRepository");
async function getProductList(request,response = []) {
    try{
        response= await getProductionMaster();

    }catch(err){
        throw(err)
    }
    return response
}

async function addProduct(request,response={}){
    try{
        let reqData={
            productId:request.body.productId,
            productName:request.body.productName,
            createdOn:new Date()
        }
       response= await insertIntoProductMaster(reqData)
        console.log(request.body);
        response.message="Sucessfully Added..!"
    }catch(err){
        throw(err)
    }
    return response
}
module.exports = {
    getProductList: getProductList,
    addProduct:addProduct
}