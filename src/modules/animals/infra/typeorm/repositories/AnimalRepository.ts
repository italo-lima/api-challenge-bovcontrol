import { MongoRepository, getMongoRepository, Raw } from 'typeorm';

import Animal from '@modules/animals/infra/typeorm/schemas/Animal';

import ICreateAnimalDTO from '@modules/animals/dtos/ICreateAnimalDTO';
import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';

class AnimalRepository implements IAnimalsRepository {
  private ormRepository: MongoRepository<Animal>;

  constructor() {
    this.ormRepository = getMongoRepository(Animal);
  }

  public async create({
    name,
    age_months,
    weight,
    type,
  }: ICreateAnimalDTO): Promise<Animal> {
    const animal = this.ormRepository.create({
      age_months,
      name,
      type,
      weight,
    });

    await this.ormRepository.save(animal);

    return animal;
  }

  public async findAllAnimals(): Promise<Animal[]> {
    const animals = this.ormRepository.find();

    return animals;
  }

  public async findById(id: string): Promise<Animal | undefined> {
    const animal = await this.ormRepository.findOne(id);

    return animal;
  }

  public async findByName(name: string): Promise<Animal | undefined> {
    const animal = await this.ormRepository.findOne({
      where: { name },
    });

    return animal;
  }

  public async save(animal: Animal): Promise<Animal> {
    return await this.ormRepository.save(animal);
  }
}

export default AnimalRepository;
