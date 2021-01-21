const Course = require('../models/Course');
const {toObjects} = require('../util/mongoose.js');

class meController {

    storedCourses(req,res) {
        Course.find({})
            .then( courses=> res.render('../views/me/stored-courses.hbs',{
                courses: toObjects(courses)
            }))
            .catch(()=>console.log('Lỗi'))
    }
    trashCourses(req,res, next){
        Course.findDeleted({})
        .then( courses=> res.render('../views/me/trash-courses.hbs',{
            courses: toObjects(courses)
        }))
        .catch(()=>console.log('Lỗi'))
    }
}

module.exports = new meController();
