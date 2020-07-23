import { ObjectID } from 'mongodb';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import ICreateAnimalDTO from '@modules/animals/dtos/ICreateAnimalDTO';

import Animal from '@modules/animals/infra/typeorm/schemas/Animal';

export default class FakeAnimalRepository implements IAnimalsRepository {
  private animals: Animal[] = [];

  public async create({
    age_months,
    name,
    weight,
    type,
  }: ICreateAnimalDTO): Promise<Animal> {
    const animal = new Animal();

    Object.assign(animal, {
      id: new ObjectID(),
      name: name.toUpperCase(),
      type,
      weight,
      age_months,
    });

    this.animals.push(animal);

    return animal;
  }

  public async findAllAnimals(): Promise<Animal[]> {
    return this.animals;
  }

  public async findById(id: string): Promise<Animal | undefined> {
    const animal = this.animals.find(animal => String(animal.id) === id);

    return animal;
  }

  public async findByName(name: string): Promise<Animal | undefined> {
    const animal = this.animals.find(animal => animal.name === name);

    return animal;
  }

  public async save(animal: Animal): Promise<Animal> {
    const findIndex = this.animals.findIndex(
      findAnimal => findAnimal.id === animal.id,
    );

    this.animals[findIndex] = animal;

    return animal;
  }
}
