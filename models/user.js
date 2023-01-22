const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    password:{
        type:String,
        required:true
    },
    profilecreated:{
        type:Boolean,
        default:false
    },
    username:{
        type:String,
        default:null,
        
        // required:true,
    },
    profilepic: {
        type: String,
        default:null
    },
    bio:{
        type:String,
    },
    email: {
        type: String,
        required: true,
        min: 8,
        max: 20,
    },
    mobileno: {
        type: Number,
        min: 8,
        max: 13,
        default:null
    },
    followers: {
        type: [String],

    },
    following: {
        type: [String],

    },
    totalposts: {
        type: Number,
        default: 0,
    }


},
    { timestamps: true }
)


UserSchema.pre('save',async function(next){
    let randomnumber = Math.floor(Math.random() * (9999 - 1111 + 1)) + 1111;
    let namepart = this.name.slice(0,4);
    namepart = namepart.trim();
    let uname = `${namepart}@${randomnumber}` 
    this.username = uname
    if(this.profilepic===null){
        this.profilepic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR80vbIZec_RnLcJISeMtsmdZ1OIA87Y_U0tw&usqp=CAU"
    }
    next();
    // console.log(this.username)
})

const User = mongoose.model('users',UserSchema);
module.exports = User;