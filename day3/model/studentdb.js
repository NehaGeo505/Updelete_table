// to access mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://NehaG:Moosewing03!@cluster0.tm1whca.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err));
let Schema = mongoose.Schema;
//creating instance for schema
const studentSchema = new Schema({
    sname:String,
    sgrade:Number
})
var studentModel = mongoose.model("students",studentSchema);
module.exports = studentModel