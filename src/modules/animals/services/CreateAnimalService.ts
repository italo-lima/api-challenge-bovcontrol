import { inject, injectable } from 'tsyringe';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import ICreateAnimalDTO from '@modules/animals/dtos/ICreateAnimalDTO';

import Animal from '../infra/typeorm/schemas/Animal';
import AppError from '@shared/errors/AppError';

@injectable()
class CreateAnimalService {
  constructor(
    @inject('AnimalRepository')
    private animalsRepository: IAnimalsRepository,
  ) {}

  public async execute({
    name,
    type,
    weight,
    age_months,
  }: ICreateAnimalDTO): Promise<Animal> {
    const parsedName = name.toUpperCase();
    const checkNameAnimal = await this.animalsRepository.findByName(parsedName);

    if (checkNameAnimal) {
      throw new AppError('Name Already used', 401);
    }

    const animal = await this.animalsRepository.create({
      age_months,
      name: parsedName,
      type,
      weight,
    });

    return animal;
  }
}

export default CreateAnimalService;
