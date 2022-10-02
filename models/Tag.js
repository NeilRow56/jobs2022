import mongoose from 'mongoose';

    
  
const tagSchema = new mongoose.Schema(
  {
    name: { type: String },
    type: { type: String },
    color: { type: String},
      },
  {
    timestamps: true,
  }
);

const Tag =
  mongoose.models.Tag || mongoose.model('Tag', tagSchema);
export default Tag;