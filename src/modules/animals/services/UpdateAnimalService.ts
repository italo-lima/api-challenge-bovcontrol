import { inject, injectable } from 'tsyringe';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';

import Animal from '../infra/typeorm/schemas/Animal';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
  name: string;
  type: string;
  weight: number;
  age_months: number;
}

@injectable()
class UpdateAnimalService {
  constructor(
    @inject('AnimalRepository')
    private animalsRepository: IAnimalsRepository,
  ) {}

  public async execute({
    id,
    name,
    type,
    weight,
    age_months,
  }: IRequest): Promise<Animal> {
    const checkNameAnimal = await this.animalsRepository.findById(id);

    if (!checkNameAnimal) {
      throw new AppError('Animal not found', 401);
    }

    if (name && name.toUpperCase() !== checkNameAnimal.name) {
      const parsedName = name.toUpperCase();
      const animal = await this.animalsRepository.findByName(parsedName);

      if (animal) {
        throw new AppError('Name already used', 401);
      }

      checkNameAnimal.name = parsedName;
    }

    checkNameAnimal.type = type;
    checkNameAnimal.age_months = age_months;
    checkNameAnimal.weight = weight;

    await this.animalsRepository.save(checkNameAnimal);

    return checkNameAnimal;
  }
}

export default UpdateAnimalService;
