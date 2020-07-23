import FakeAnimalsRepository from '@modules/animals/repositories/fakes/FakeAnimalsRepository';
import CreateAnimalService from '@modules/animals/services/CreateAnimalService';
import IndexAnimalsService from '@modules/animals/services/IndexAnimalsService';
import AppError from '@shared/errors/AppError';

let fakeAnimalsRepository: FakeAnimalsRepository;
let indexAnimalsService: IndexAnimalsService;
let createAnimalService: CreateAnimalService;

describe('Animal', () => {
  beforeEach(() => {
    fakeAnimalsRepository = new FakeAnimalsRepository();
    indexAnimalsService = new IndexAnimalsService(fakeAnimalsRepository);
    createAnimalService = new CreateAnimalService(fakeAnimalsRepository);
  });

  it('should be able return animal for a id exists', async () => {
    const animal = await createAnimalService.execute({
      name: 'Teste',
      type: 'Cavalo',
      age_months: 12,
      weight: 112.6,
    });

    const findAnimal = await indexAnimalsService.execute(String(animal.id));

    expect(findAnimal?.id).toEqual(animal.id);
  });

  it('should not be able return animal for a id not-exists', async () => {
    await expect(indexAnimalsService.execute('not-id')).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
