import Home from "./api/home";
import ContentRouter from "./api/content";

export default function (app) {
  app.use("/", Home);
  app.use("/content", ContentRouter);
}
