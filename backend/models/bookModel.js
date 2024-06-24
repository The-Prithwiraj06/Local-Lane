import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    booktitle: {
        type: String,
        required: true,
      },
  },
  { timeStamps: true }
);

const Donate = mongoose.model("Donate", bookSchema);

export default Donate;