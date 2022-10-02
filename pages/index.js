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
export async function getStaticProps() {
  await db.Connect();
  const jobs = await Job.find().lean();
  return {
    props: {
      jobs: jobs.map(db.convertDocToObj),
    },
  };
}