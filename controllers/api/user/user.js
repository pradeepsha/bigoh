
const Helper = require("../../../helpers/helper");

/* Models*/
const Model = require('../../../models');
const UserModel = Model.User
/* End Models*/

class User {

    async getUserList(req, res) {
        try {
    
            const users = await UserModel.findAll();
    
            return Helper.getSuccessMessage([req, res], users);
        } catch (error) {

            return Helper.getErrorMessage([req, res], error);
        }
    }


}

module.exports = new User();