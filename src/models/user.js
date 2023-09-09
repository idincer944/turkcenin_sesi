const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        password_hash: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        is_admin: {
            type: Boolean,
            default: false,
        },
        is_verified: {
            type: Boolean,
            default: false,
        },
        registered_at: {
            type: Date,
            default: Date.now,
        },
        avatar: {
            type: String,
        },
    },
    {
        virtuals: {
            // Create a virtual property `fullName` with a getter and setter
            fullName: {
            get() {
                return `${this.firstname} ${this.lastname}`;
            },
            set(v) {
                // `v` is the value being set, so use the value to set
                // `firstName` and `lastName`.
                const firstname = v.substring(0, v.indexOf(' '));
                const lastname = v.substring(v.indexOf(' ') + 1);
                this.set({ firstname, lastname });
            },
            },
        },
    }
);

userSchema.set('toJSON', {
    virtuals: true,
    getters: true,
    setters: true,
    _id: false,
  });

modules.exports = mongoose.model('User', userSchema);