const Course = require('../models/Course');
const {toObjects} = require('../util/mongoose');

class SiteController {

    //GET /news
    index(req, res, next) {
        
        // Course.find({}, function(err, course){
        //     if(!err){
        //         res.json(course);
        //     }else{
        //         res.status(400).json({err: 'ERROR!!!'});
        //     }
        // });
        // res.render('home');
        Course.find({})
            .then(courses =>{
                res.render('home',{
                    courses:toObjects(courses),
                });
            })
            .catch(next);
    }

    search(req,res) {
        res.render('search');
    }
}

module.exports = new SiteController;
