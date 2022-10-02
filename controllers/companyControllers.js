import Company from "../models/Company"

 
//GET all companies
 
const allCompanies = async (req, res) => {
   try {
    const companies = await Company.find()
 
    res.status(200).json({
        success: true,
        companies
    })

      
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
   }
 
     
}
// Create new company = /api/companies
 
const newCompany = async (req, res) => {
 
   try {
       const company = await Company.create(req.body);
      
   res.status(200).json({
       success: true,
       company
   })
      
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
           
   }
}

 //GET single company details => api/companies/:id

 const getSingleCompany = async (req, res) => {
 
    try {
        const singleCompany = await Company.findById(req.query.id);
  
        if(!singleCompany) {
            return res.status(404).json({
                success: false,
                error: "Company not found with this ID"
            })
  
        }
  
        res.status(200).json({
            success: true,
            singleCompany
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
 //UPDATE single company details => api/companies/:id

 const updateSingleCompany = async (req, res) => {
    try {
        let singleCompany = await Company.findById(req.query.id);
         if(!singleCompany) {
            return res.status(404).json({
                success: false,
                error: "Company not found with this ID"
            })
         }
  
        singleCompany = await Company.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true
  
        })
         res.status(200).json({
            success: true,
            singleCompany
        })
      
  
      
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
           
    }
 }
 
    
// DELETE images associated with company

 //DELETE single company details => api/companies/:id

 const deleteSingleCompany = async (req, res) => {
 
    try {
        const singleCompany = await Company.findById(req.query.id);
  
        if(!singleCompany) {
            return res.status(404).json({
                success: false,
                error: "Company not found with this ID"
            })
  
        }

        await singleCompany.remove()
  
        res.status(200).json({
            success: true,
            message:'Company is deleted'
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
export {
allCompanies,
newCompany,
getSingleCompany,
updateSingleCompany,
deleteSingleCompany
}