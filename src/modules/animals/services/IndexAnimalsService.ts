import { inject, injectable } from 'tsyringe';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';

import Animal from '../infra/typeorm/schemas/Animal';
import AppError from '@shared/errors/AppError';

@injectable()
class CreateAnimalService {
  constructor(
    @inject('AnimalRepository')
    private animalsRepository: IAnimalsRepository,
  ) {}

  public async execute(id: string): Promise<Animal> {
    const animal = await this.animalsRepository.findById(id);

    if (!animal) {
      throw new AppError('Animal not found', 401);
    }

    return animal;
  }
}

export default CreateAnimalService;
