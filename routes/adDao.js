var mongoose = require('mongoose');
mongoose.connect('mongodb://unicom:unicom3#@localhost/health720');

var ddSchema = mongoose.Schema({
    storageName: String,
    weatherCityName: String,
    dataSourceSN: String,
    latestUploadTime: Number,
    tem: {
        value: Number

    },
    hum: {
        value: Number

    },
    noise: {
        value: Number

    },
    "pm2.5": {
        value: Number

    },
    ch2o: {
        value: Number

    },
    Voc: {
        value: Number

    },
    pm1: {
        value: Number

    },
    pm10: {
        value: Number

    },
    co2: {
        value: Number

    },
    weather_text: String,
    weather_temp: {
        value: Number

    },
    weather_humidity: {
        value: Number

    },
    air_aqi: {
        value: Number

    },
    air_pm25: {
        value: Number

    },
    air_pm10: {
        value: Number

    },
    "weather_hum": {
        value: Number

    },
    weather_tem: {
        value: Number

    },
    chumailv: Number,
    "suggest": [
        String,
        String
    ]

});

var queryData= {
    getresult : function(callback){
        var db = mongoose.connection;
        db.on('error', console.error.bind(console,'connection error:'));
        var ddModel = db.model('devicedata', ddSchema);

        var query = ddModel.find({}, function(error, result){
            if(error){
                console.log(error);
            }else {
                //   console.log(" " + result);
                console.log("hahahah");
                callback(result);
            }
        });
    }
}

module.exports = queryData;
