import InitializeDB from "./init/db";
import app from "./app";

InitializeDB();
app.set("port", process.env.PORT || 3000);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
