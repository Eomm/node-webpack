import express from "express";
import path from "path";
import morgan from "morgan";

import Routes from "./routes/index";
import * as ErrorHandler from "./handlers/errorHandler";

const app = express();
if (app.get("env") === "development") {
  app.use(morgan("dev"));
} else {
  // Production logger
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.locals.siteName = "Test API";
  res.locals.currentPath = req.path;
  next();
});

// Set up routes
Routes(app);

// If none of the above routes could be matched 404 them and forward to error handler
app.use(ErrorHandler.notFound);

if (app.get("env") === "development") {
  /* Development Error Handler - Prints stack trace */
  app.use(ErrorHandler.developmentErrors);
}

app.use(ErrorHandler.productionErrors);

export default app;
