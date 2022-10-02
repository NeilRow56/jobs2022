import db from '../../../lib/dbConnect'
import nc from "next-connect";
import { allCompanies, newCompany } from "../../../controllers/companyControllers"
 
 
const handler = nc()
 
db.Connect()
 
handler.get(allCompanies)

handler.post(newCompany)
 
export default handler