const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        enum: ['remote', 'onsite', 'hybrid', 'none'],
        default: 'none'
    },
    status: {
        type: String,
        enum: ['applied', 'interviewing', 'offer received', 'rejected', 'none', 'withdrawn'],
        default: 'none'
    },
    notes: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Job', jobSchema);
