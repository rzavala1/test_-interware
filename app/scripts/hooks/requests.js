const axios = require('axios').default;


const SERVER = "http://localhost:";
const PORT = "3035";
const API = "/api/v1"
const URL_SEARCH = SERVER + PORT + API + "/products/search";

const CONFIG = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
};

const search = (value, callback) => {
    console.info(URL_SEARCH)
    axios.get(URL_SEARCH+"/"+value,
        CONFIG
    )
        .then(function (response) {
            console.info(response)
            if(response.status===201) {
                callback(response.data);
            }
        })
        .catch(function (error) {
            console.log(error);
            //fnError(error.response.data.message);
        });
}

export default { search };

