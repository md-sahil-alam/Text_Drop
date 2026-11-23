const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const textSchema= new Schema({
  userName : {
    type:String,
    required: true,
    minLength:3,
    maxLength:50
  },

  password : {
    type:String,
    required: true,
    minLength:3,
   
  },

  data:{
    type:String,
    minLength:1,
    required: true
  },
    expiresAt: {
    type: Date,
    default: () => new Date(Date.now() + 24 * 60 * 60 * 1000)
  }
});
textSchema.index(
  { expiresAt: 1 },
  { expireAfterSeconds: 0 }
);

const textModel = mongoose.model("text",textSchema);

module.exports={
  textModel
}