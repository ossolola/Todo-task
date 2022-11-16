const {Schema, model} = require("mongoose");

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
            minlength: 10
        }
    },
    {timestamps: true}
);

const todoModel = model("todos", taskSchema);


module.exports = todoModel;