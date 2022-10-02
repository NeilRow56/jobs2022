import Job from "../models/Job"

 
//GET all jobs
 
const allJobs = async (req, res) => {
   try {
    const jobs = await Job.find()
 
    res.status(200).json({
        success: true,
        jobs
    })

      
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
   }
 
     
}

// const blogs = await Blog.aggregate([
//     {
//         $lookup: {
//             from: "tags",
//             localField: "author",
//             foreignField: "_id",
//             as: "blog_tags"
//         }
//     }])

// Create new job = /api/jobs
 
const newJob = async (req, res) => {
 
   try {
       const job = await Job.create(req.body);
      
   res.status(200).json({
       success: true,
       job
   })
      
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
           
   }
}

 //GET single job details => api/job/:id

 const getSingleJob = async (req, res) => {
 
    try {
        const singleJob = await Job.findById(req.query.id);
  
        if(!singleJob) {
            return res.status(404).json({
                success: false,
                error: "Job not found with this ID"
            })
  
        }
  
        res.status(200).json({
            success: true,
            singleJob
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
 //UPDATE single job details => api/jobs/:id

 const updateSingleJob = async (req, res) => {
    try {
        let singleJob = await Job.findById(req.query.id);
         if(!singleJob) {
            return res.status(404).json({
                success: false,
                error: "Job not found with this ID"
            })
         }
  
        singleJob = await Job.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true
  
        })
         res.status(200).json({
            success: true,
            singleJob
        })
      
  
      
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
           
    }
 }
 
    
// DELETE images associated with job

 //DELETE single job details => api/jobs/:id

 const deleteSingleJob = async (req, res) => {
 
    try {
        const singleJob = await Job.findById(req.query.id);
  
        if(!singleJob) {
            return res.status(404).json({
                success: false,
                error: "Job not found with this ID"
            })
  
        }

        await singleJob.remove()
  
        res.status(200).json({
            success: true,
            message:'Job is deleted'
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
export {
allJobs,
newJob,
getSingleJob,
updateSingleJob,
deleteSingleJob
}