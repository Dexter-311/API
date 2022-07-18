import app from "./app";

//Database
import sequelize from "./database";

const init = async () => {
  try {
    await sequelize.sync();

    app.listen(app.get("port"));
    console.log("Server listening on port:", app.get("port"));
  } catch (err) {
    console.log(err);
  }
};

init();