const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { exerciseRouter } = require("../src/routes/exercise")

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", exerciseRouter)

const MONGO_URL = "mongodb+srv://lakrandiayeshani1204:MERNpassword123@cluster0.ubbizur.mongodb.net/fitnessAssistance?retryWrites=true&w=majority";

async function ConnectDB() {
    await mongoose.connect(MONGO_URL);
}

ConnectDB().then(()=> console.log("server connected to the mongo database")).catch((err) => console.error(`error: ${err}`))

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`App listen to port ${PORT}`);
})

