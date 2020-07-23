import FakeAnimalsRepository from '@modules/animals/repositories/fakes/FakeAnimalsRepository';
import CreateAnimalService from '@modules/animals/services/CreateAnimalService';
import UpdateAnimalService from '@modules/animals/services/UpdateAnimalService';
import AppError from '@shared/errors/AppError';

let fakeAnimalsRepository: FakeAnimalsRepository;
let createAnimalService: CreateAnimalService;
let updateAnimalService: UpdateAnimalService;

describe('Animal', () => {
  beforeEach(() => {
    fakeAnimalsRepository = new FakeAnimalsRepository();
    updateAnimalService = new UpdateAnimalService(fakeAnimalsRepository);
    createAnimalService = new CreateAnimalService(fakeAnimalsRepository);
  });

  it('should be able to update animal exists', async () => {
    const animal = await createAnimalService.execute({
      name: 'Teste',
      type: 'Cavalo',
      age_months: 12,
      weight: 112.6,
    });

    const updatedAnimal = await updateAnimalService.execute({
      id: String(animal.id),
      name: 'Teste',
      type: 'Porco',
      age_months: 10,
      weight: 112.6,
    });

    expect(updatedAnimal.type).toEqual('Porco');
    expect(updatedAnimal.age_months).toEqual(10);
  });

  it('should not be able to update a animal not-exists', async () => {
    await expect(
      updateAnimalService.execute({
        id: 'not-exists',
        name: 'Teste',
        type: 'Porco',
        age_months: 10,
        weight: 112.6,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it(' should not be able to update a named animal in use', async () => {
    const animal = await createAnimalService.execute({
      name: 'Teste',
      type: 'Cavalo',
      age_months: 12,
      weight: 112.6,
    });

    await createAnimalService.execute({
      name: 'Teste2',
      type: 'Cavalo',
      age_months: 12,
      weight: 112.6,
    });

    await expect(
      updateAnimalService.execute({
        id: String(animal.id),
        name: 'Teste2',
        type: 'Porco',
        age_months: 19,
        weight: 80,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the animals name if it does not exist', async () => {
    const animal = await createAnimalService.execute({
      name: 'Teste',
      type: 'Cavalo',
      age_months: 12,
      weight: 112.6,
    });

    const updatedAnimal = await updateAnimalService.execute({
      id: String(animal.id),
      name: 'Teste2',
      type: 'Porco',
      age_months: 10,
      weight: 112.6,
    });

    expect(updatedAnimal.name).toEqual('TESTE2');
  });
});
