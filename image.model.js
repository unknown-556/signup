import mongoose from "mongoose";
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
      },
    password: {
        type: String,
        required: true,
      },
});

const Image = mongoose.model("Image", imageSchema);

export default Image
