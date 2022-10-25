const mongoose = require("mongoose")

const newsSchema = mongoose.Schema({
    news: {
        type: String,
        required : true
    },
    detail : {
        type: String,
    },
    categoryID :{
        type : mongoose.Schema.Types.ObjectId,
        ref: "category"
    }
})

module.exports = mongoose.model("News", newsSchema)