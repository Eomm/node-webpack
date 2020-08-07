import mongoose from "mongoose";
const Content = mongoose.model("Content");

class ContentController {
  static async getAll(req, res) {
    const grading = await Content.find();
    res.json(grading);
  }

  static async addNew(req, res) {
    const doc = new Content(req.body);
    await doc.save();

    res.json(doc);
  }
}

export default ContentController;
