
const bcrypt = require('bcrypt');

/* End Models*/
class Helpers {


    getErrorMessage([req, res], error = null) {
        res.status(422).json({
            "status": "fail",
            "response": error ? error : "Something went wrong",
        });
    }



    getSuccessMessage([req, res], data = null, customObj = null) {
        let response = {
            "status": 200,
            "response": data ? data : 'request_process_successfully'
        }
        if (customObj) {
            response = { ...response, ...customObj }
        }
        return res.status(200).json(response);
    }


    getAuthErrorMessage(res, data = null) {
        return res.status(401).json({
            "status": "fail",
            "response": "Unauthorized"
        });
    }

    getValidationErrorMessage([req, res], data = null) {
        console.log(data);
  
        let response = {
            "status": "fail",
            "response": data ? data : req.t('invalid_parameters')
        }
        return res.status(400 ).json(response);
    }


}

module.exports = new Helpers();