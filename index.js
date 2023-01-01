require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const db = require('./helpers/dbConnect');
const errorHandler = require('./middlewares/error.middleware');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require("helmet")

db();

const app = express();
app.use(helmet());
app.use(cors({credentials: true, origin: true}));
app.use(cookieParser());
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", routes);
app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


