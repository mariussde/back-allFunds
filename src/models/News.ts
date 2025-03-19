import mongoose, { Schema, Document } from 'mongoose';

export interface INews extends Document {
  title: string;
  content: string;
  isArchived: boolean;
  createdAt: Date;
  archivedAt?: Date;
}

const NewsSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  isArchived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  archivedAt: { type: Date }
});

export default mongoose.model<INews>('News', NewsSchema); 
