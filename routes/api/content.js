import express from "express";
import ContentController from "../../controllers/content.controller";
import { catchErrors } from "../../handlers/errorHandler";
const ContentRouter = express.Router();

ContentRouter.route("/")
  .get(catchErrors(ContentController.getAll))
  .post(catchErrors(ContentController.addNew));

export default ContentRouter;
