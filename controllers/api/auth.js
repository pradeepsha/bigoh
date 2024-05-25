
const {validationResult} = require("express-validator");
const bodyValidator = require("express-validator").body;
const Helper = require("../../helpers/helper");

/* Models*/
const Model = require('../../models');
const UserModel = Model.User
/* End Models*/


class Auth {

    validateCreateForm() {
        return [
            bodyValidator(["title"]).exists().withMessage('name is required').isString().withMessage('name must be a string'),
        ];
    }
    async postCreateForm(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()){
                console.log("errors",errors.array())
                return Helper.getValidationErrorMessage([req, res], errors.array());

            }
                const formStructure = {
                    fields: {
                        uniqueId: "string",
                        name: "string",
                        email: "email",
                        phone: "number",
                        isGraduate: "boolean"
                    }
                };

                res.status(200).json({ message: "Form created successfully", formStructure});

        } catch (error) {

            return Helper.getErrorMessage([req, res], error);
        }
    }
    

    validateFillForm() {
        return [
            bodyValidator('name').exists().withMessage('name is required').isString().withMessage('name must be a string'),
            bodyValidator('email').exists().withMessage('email is required').isEmail().withMessage('email must be a valid email address'),
            bodyValidator('phone').exists().withMessage('phone is required').isNumeric().withMessage('phone must be a number'),
            bodyValidator('isGraduate').exists().withMessage('isGraduate is required').isBoolean().withMessage('isGraduate must be a boolean'),
        ];
    }

    async postFillForm(req, res) {

        try {
            const body = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return Helper.getValidationErrorMessage([req, res], errors.array());
            }

            const formTitle = req.params.form_title;
            const filledData = req.body;
  
            const user = await UserModel.create(req.body);

            return Helper.getSuccessMessage([req, res], user);
        } catch (e) {
            // console.log(e)
            return Helper.getValidationErrorMessage([req, res], e.message);
        }
    }

}

module.exports = new Auth();