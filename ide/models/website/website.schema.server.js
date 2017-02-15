module.exports = function () {

    var mongoose = require("mongoose");

    var WebsiteSchema = mongoose.Schema({
        name: String,
        description: String,
        dateCreated: {type: Date, default: Date.now()}
    }, {collections: "website"});

    return WebsiteSchema;
};



