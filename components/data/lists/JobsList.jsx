import React from 'react'
import JobCard from '../cards/JobCard'

const JobsList = ( {jobs}) => {
  return (
    <div>
    { jobs && jobs.map((job) => (
        <JobCard key={job._id}  job = {job} />
    ))
        
    }    
      
    </div>
  )
}

export default JobsList
