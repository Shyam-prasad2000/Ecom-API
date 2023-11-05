const mongoose = require("mongoose");

const ec_productMasterSchema = new mongoose.Schema({
    productId:{
        type:Number,
        require:true

    },
    productName: {
    type: String,

  },
  createdOn:{
    type:Date
  }
});

const ec_productMaster = mongoose.model("ec_productMaster", ec_productMasterSchema);

module.exports = ec_productMaster;