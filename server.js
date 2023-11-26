const app = require('./app')

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000")
})

const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://Liudmila:JkepChf44OXKpOEQ@cluster0.ajaeozm.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => { app.listen(3001)})
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
