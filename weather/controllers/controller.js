const axios = require('axios');

//require dotenv package
require('dotenv').config();

// Set Up API key
const api_key = `${process.env.API_KEY}`
//console.log(api_key)


let postWeather = async (req,res) => {
 try {

    let city = req.body.city
    console.log(typeof city)
    let options = {
        method:'get',
        url : `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
    }
    const response = await axios(options);
    let data  = response.data
    res.status(200).send({status:true, data : data})
   } catch (err) {
        res.status(500).send({message : err.message});
   }
}

let getOtp = async function (req, res) {
    try {
        let mobile = req.body
        
       // console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: mobile
        }

        let result = await axios(options)
       // console.log(result.data)
       res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }   
}       

module.exports = {getOtp,postWeather}
