import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    remoteOk: {type: Boolean, default: false},
    featuredJob: {type: Boolean, default: false},
    baseAnnualSalary: {type: Number, required: true},
    datePosted: {type: Date},
    experienceLevel: {
        type: String,
        required: true,
        enum: {
            values: [
                'Junior',
                'Semi-Senior',
                'Senior'
            ]
        }
    },
    jobType: {
        type: String,
        required: true,
        enum: {
            values: [
                'Engineer',
                'Admin',
                'Sales'
            ]
        }
    },
    
    jobCategory: { type: String, required: true , default: "Uncategorised"},
    applicationLink: { type: String, required: true },
    jobDescription: { type: String, required: true },
    aboutYou: { type: String },
    jobResponsibilities: { type: String, required: true },
    remunerationPackage: { type: String},
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
      }
    ],
    company: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
      }
    ]
  
  },
  
  {
    timestamps: true,
  }
);

const Job =
  mongoose.models.Job || mongoose.model('Job', jobSchema);
export default Job;