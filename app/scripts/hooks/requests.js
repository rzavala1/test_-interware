const axios = require('axios').default;
import configReact from '../../../config/template.data';

const CONFIG = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
};

const search = (value, callback) => {
    axios.get(configReact.URL_SEARCH + value,
        CONFIG
    )
        .then(function (response) {
            console.info(response)
            if (response.status === 201) {
                callback(response.data);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default { search };

