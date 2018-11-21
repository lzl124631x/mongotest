import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test').catch((err) => {
    if (err) {
        console.log('Fatal: Failed to connect to mongo DB!');
    }
});

import { JobV1 } from './jobv1';
function one() {
    JobV1.create({ name: 'name' }).then(job => {
        console.log("Job created:", job);
    });
}
one();

// import { JobV2 } from './jobv2';
// function two() {
//     JobV2.find({}).then(job => {
//         console.log(job);
//     });
// }
// two();