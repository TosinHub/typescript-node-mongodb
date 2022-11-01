import { Schema, model } from 'mongoose';
import Post from '@/resources/post/post.interface';
import exp from 'constants';

const PostSchema = new Schema(
    {
        title: {
            title: String,
            require: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default model<Post>('Post', PostSchema)
