import { Segments, Joi, celebrate } from 'celebrate';

export default {
  createAnimal: celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().required(),
      type: Joi.string().required(),
      age_months: Joi.number().required(),
      weight: Joi.number().required(),
    }),
  }),
  updateAnimal: celebrate({
    [Segments.BODY]: Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      type: Joi.string().required(),
      age_months: Joi.number().required(),
      weight: Joi.number().required(),
    }),
  }),
  indexAnimal: celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().required(),
    }),
  }),
};
