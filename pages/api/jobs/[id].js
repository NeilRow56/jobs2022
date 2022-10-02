
// /api/jobs/:id

import nc from 'next-connect'
import db from '../../../lib/dbConnect'

import { getSingleJob, updateSingleJob, deleteSingleJob } from '../../../controllers/jobControllers'


const handler = nc()

db.Connect()

handler.get(getSingleJob)

handler.put(updateSingleJob)

handler.delete(deleteSingleJob)



export default handler