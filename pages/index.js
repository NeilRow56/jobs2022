/* eslint-disable react/no-unescaped-entities */
/* This example requires Tailwind CSS v2.0+ */

import JobsList from '../components/data/lists/JobsList';
import db from '../lib/dbConnect'
import Job from '../models/Job'

export default function Index({ jobs }) {
  
  return (
   <JobsList jobs = {jobs} />
  );
}
// export async function getStaticProps() {
//   await db.Connect();
//   const jobs = await Job.find().lean();
//   return {
//     props: {
//       jobs: jobs.map(db.convertDocToObj),
//     },
//   };
// }
export async function getStaticProps() {
  await db.Connect();

   /* find all the data in our database */
   const result = await Job.find({})
   const jobs = result.map((doc) => {
    const job = doc.toObject()
    job._id = job._id.toString()
    job.datePosted = job.datePosted.toString();  
    job.updatedAt = job.updatedAt.toString();
     return job
   })
 
   return { props: { jobs: jobs } }
 }
