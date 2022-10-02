import db from '../../../lib/dbConnect'
import nc from "next-connect";
import { allJobs, newJob } from "../../../controllers/jobControllers"
 
 
const handler = nc()
 
db.Connect()
 
handler.get(allJobs)

handler.post(newJob)
 
export default handler