import { Document, Schema, Model, model } from 'mongoose';

export interface IJob extends Document {
    name: string;
    category: number;
};

export const JobSchema = new Schema({
    name: String,
    category: {
        type: Number,
        default: 2
    }
},
    { timestamps: true });

export const JobV2: Model<IJob> = model('Job', JobSchema);