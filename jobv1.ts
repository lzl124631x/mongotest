import { Document, Schema, Model, model } from 'mongoose';

export interface IJob extends Document {
    name: string;
};

export const JobSchema = new Schema({
    name: String,
},
    { timestamps: true });

export const JobV1: Model<IJob> = model('Job', JobSchema);