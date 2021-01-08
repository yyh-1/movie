const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test3",{
    useNewUrlParser:true,
    useUnifiedTopology: true
});

mongoose.connection.on("open",() => {
    console.log("连接已打开")
});