const mongoose = require('mongoose')


const Eggs_Collection_Schema = mongoose.Schema({


    img_container_src: String,
    tablescraper_selected_row: String,
    Category_type: String,
    Category_List: String,
    Food_list: []

}, {
    versionKey: false,
    timeStamp: true
})

const Eggs_Collection_modal = mongoose.model("Eggs_Collection", Eggs_Collection_Schema)


module.exports = { Eggs_Collection_modal }