import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/animals/services/CreateAnimalService';
import ShowAnimalsService from '@modules/animals/services/ShowAnimalsService';
import IndexAnimalsService from '@modules/animals/services/IndexAnimalsService';
import UpdateAnimalService from '@modules/animals/services/UpdateAnimalService';

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { type, name, weight, age_months } = req.body;

    const animalService = container.resolve(CreateUserService);

    const animal = await animalService.execute({
      type,
      name,
      weight,
      age_months,
    });

    return res.json(animal);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const animalService = container.resolve(ShowAnimalsService);

    const animals = await animalService.execute();

    return res.json(animals);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const animalService = container.resolve(IndexAnimalsService);

    const animals = await animalService.execute(id);

    return res.json(animals);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, type, name, weight, age_months } = req.body;

    const animalService = container.resolve(UpdateAnimalService);

    const animals = await animalService.execute({
      id,
      name,
      type,
      weight,
      age_months,
    });

    return res.json(animals);
  }
}
