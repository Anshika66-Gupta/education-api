const videoSchema = require('../../models/videos');

module.exports = {
    createVideo: async (req, res, next) =>{
        console.log(req.body);
        try{
            const category = await videoSchema.create(req.body);
            res.status(201).json({
                isSuccessful: true,
                message:"Video created successfully",
                data: category
            });
        }catch(err){
            res.status(400).json({
                isSuccessful: false,
                message: err.message,
                data: null
            });
        }
        
    },
    getVideos: async (req, res, next) =>{
        //req.params
        try{
            const categories = await videoSchema.find();
            res.status(200).json({
                isSuccessful: true,
                message:"Videos fetched successfully",
                videos: categories
            });
        }catch(err){
            res.status(400).json({
                isSuccessful: false,
                message: err.message,
                videos:null
            });
        }
    },
    getVideosBySubjectAndChapter: async (req, res, next) =>{
        try{
            const subcategories = await videoSchema.findAll({subject: req.query.subject,chapter:req.query.chapter});
            res.status(200).json({
                isSuccessful: true,
                message:"Videos fetched successfully",
                videos: subcategories
            });
        }catch(err){
            res.status(400).json({
                isSuccessful: false,
                message: err.message,
                videos:null
            });
        }
    }
    // updateCategory:  async (req, res, next) =>{
    //     console.log(req.body);
    //     try {
    //         const category = await videoSchema.updateOne({category_id: req.query.category_id},{$set: req.body});
    //         res.status(200).json({
    //             isSuccessful: true,
    //             message:"Category updated successfully",
    //             data: category
    //         });
    //     } catch (err) {
    //         res.status(400).json({
    //             isSuccessful: false,
    //             message: err.message,
    //             data:null
    //         });
    //     }
    // }
};