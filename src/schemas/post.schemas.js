import Joi from "joi";

export const postSchema = Joi.object({
    photo: Joi.string().uri().required(),
    description: Joi.string().max(200).required()
})