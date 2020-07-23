import FakeAnimalsRepository from '@modules/animals/repositories/fakes/FakeAnimalsRepository';
import CreateAnimalService from '@modules/animals/services/CreateAnimalService';
import AppError from '@shared/errors/AppError';

let fakeAnimalsRepository: FakeAnimalsRepository;
let createAnimalService: CreateAnimalService;

describe('Animal', () => {
  beforeEach(() => {
    fakeAnimalsRepository = new FakeAnimalsRepository();
    createAnimalService = new CreateAnimalService(fakeAnimalsRepository);
  });

  it('should be able to create a new animal', async () => {
    const animal = await createAnimalService.execute({
      name: 'Teste',
      type: 'Cavalo',
      age_months: 12,
      weight: 112.6,
    });

    expect(animal).toHaveProperty('id');
  });

  it('should be not able to create a new animal with same name from another', async () => {
    const animal = await createAnimalService.execute({
      name: 'Teste',
      type: 'Cavalo',
      age_months: 12,
      weight: 112.6,
    });

    await expect(
      createAnimalService.execute({
        name: 'Teste',
        type: 'Boi',
        age_months: 18,
        weight: 127,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
