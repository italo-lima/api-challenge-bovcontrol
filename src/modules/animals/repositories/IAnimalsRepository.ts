import Animal from '@modules/animals/infra/typeorm/schemas/Animal';

import ICreateUserDTO from '@modules/animals/dtos/ICreateAnimalDTO';

interface IAnimalsRepository {
  findAllAnimals(): Promise<Animal[]>;
  findById(id: string): Promise<Animal | undefined>;
  findByName(name: string): Promise<Animal | undefined>;
  create(data: ICreateUserDTO): Promise<Animal>;
  save(user: Animal): Promise<Animal>;
}

export default IAnimalsRepository;
