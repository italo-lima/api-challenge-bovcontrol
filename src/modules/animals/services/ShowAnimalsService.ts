import { inject, injectable } from 'tsyringe';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';

import Animal from '../infra/typeorm/schemas/Animal';

@injectable()
class CreateAnimalService {
  constructor(
    @inject('AnimalRepository')
    private animalsRepository: IAnimalsRepository,
  ) {}

  public async execute(): Promise<Animal[]> {
    return await this.animalsRepository.findAllAnimals();
  }
}

export default CreateAnimalService;
