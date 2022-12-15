const mongoose = require('mongoose')


const Mutton_Collection_Schema = mongoose.Schema({


    img_container_src: String,
    tablescraper_selected_row: String,
    Category_type: String,
    Category_List: String,
    Food_list: []

}, {
    versionKey: false,
    timeStamp: true
})

const Mutton_Collection_modal = mongoose.model("Mutton_Collection", Mutton_Collection_Schema)





module.exports = { Mutton_Collection_modal }