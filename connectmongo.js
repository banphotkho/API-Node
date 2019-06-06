const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect("mongodb://localhost/tmlthapi",{useNewUrlParser:true})
    .then(()=> console.log('Connect to mongodb...'))
    .catch(err => console.error('Could not connect to mongodb..',err));

// Create schema
const courseSchema = new mongoose.Schema({
    name : String ,
    username : String,
    password : String,
    role : String,
    status : Boolean,
    type: Number,
    create_at : {type:Date, default: Date.now},
    update_at : {type:Date, default: Date.now}
});

//Declare Class
const Course = mongoose.model("users",courseSchema);
//Declare instanct
async function CreateCourse() {
    const course = new Course({
    name: "Xiao ping",
    username : "mailo2000",
    passsword : "Ban@@1974",
    role : "admin",
    status : true,
    type: 1
});

 const result =  await course.save();
 console.log(result);
}

//Find data in Mongodb
async function getUsername(){
    //compareison query 
    // eq ==, ne <>, gt >=,gte <=,lt <,in,nin not in,
    // example systax Course.find({price:{$eq:10}})
    const courses = await Course.find()
                    .select({name:1,role:1})
                    .sort({name:1}) // -1 Desending, 1 = Ascending
                    .count();
    console.log(courses);
}

getUsername()

//CreateCourse();

// const Myuser = mongoose.model("users",User);

// var myuser = new Myuser ({
//     name: "Banphot Khongpom",
//     username : "banphotkho",
//     passsword : "Ban@@1974",
//     role : "admin",
//     status : true,
//     type: 1
// });

//  const result =  await myuser.save();
//  console.log(result);
 








