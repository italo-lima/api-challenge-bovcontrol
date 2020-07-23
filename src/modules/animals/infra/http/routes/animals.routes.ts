import { Router } from 'express';

import AnimalsController from '@modules/animals/infra/http/controllers/AnimalsController';

import ValidationsAnimal from '@modules/animals/infra/http/validations/animal.validator';

const animalsRoutes = Router();

const animalsController = new AnimalsController();

animalsRoutes.get('/', animalsController.show);
animalsRoutes.get(
  '/:id',
  ValidationsAnimal.indexAnimal,
  animalsController.index,
);
animalsRoutes.post(
  '/',
  ValidationsAnimal.createAnimal,
  animalsController.create,
);
animalsRoutes.put(
  '/',
  ValidationsAnimal.updateAnimal,
  animalsController.update,
);

export default animalsRoutes;
