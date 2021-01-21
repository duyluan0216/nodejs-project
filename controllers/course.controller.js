const Course = require('../models/Course');
const {toObject} = require('../util/mongoose.js');

class CourseController {

    show(req,res) {
        Course.findOne({ slug: req.params.slug})
            .then(course => {
                res.render('../views/courses/show.hbs',{
                    course: toObject(course)
                })
            })
    }

    create(req, res) {
        res.render('../views/courses/create.hbs');
    }

    store(req, res) {
        // res.json(req.body)
        const formData = req.body;
        formData.img = `https://img.youtube.com/vi/R6plN3FvzFY/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(()=> console.log('Lỗi'))
    }

    edit(req, res) {
        Course.findById(req.params.id)
            .then(course => res.render('../views/courses/edit.hbs',{
                course: toObject(course)
            }))
    }

    update(req, res, next){
        Course.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    delete(req,res, next) {
        Course.delete({_id: req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)
    }

    forceDelete(req,res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)
    }

    restore(req,res, next) {
        Course.restore({_id: req.params.id})
            .then(()=>res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CourseController();
