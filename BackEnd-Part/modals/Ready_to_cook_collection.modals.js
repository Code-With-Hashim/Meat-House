const mongoose = require('mongoose')


const Marindas_Collection_Schema = mongoose.Schema({


    "img-container src": String,
    "tablescraper-selected-row": String,
    Category_type: String,
    Category_List: String,
    Food_list: []

}, {
    versionKey: false,
    timeStamp: true
})

const Marindas_Collection_modal = mongoose.model("Marindas_Collection", Marindas_Collection_Schema)


module.exports = { Marindas_Collection_modal }