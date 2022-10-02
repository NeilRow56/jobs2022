// /api/Companies/:id

import nc from 'next-connect'
import db from '../../../lib/dbConnect'

import { getSingleCompany, updateSingleCompany, deleteSingleCompany } from '../../../controllers/companyControllers'


const handler = nc()

db.Connect()

handler.get(getSingleCompany)

handler.put(updateSingleCompany)

handler.delete(deleteSingleCompany)



export default handler