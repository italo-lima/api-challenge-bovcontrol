import FakeAnimalsRepository from '@modules/animals/repositories/fakes/FakeAnimalsRepository';
import CreateAnimalService from '@modules/animals/services/CreateAnimalService';
import ShowAnimalsService from '@modules/animals/services/ShowAnimalsService';

let fakeAnimalsRepository: FakeAnimalsRepository;
let showAnimalsService: ShowAnimalsService;
let createAnimalService: CreateAnimalService;

describe('Animal', () => {
  beforeEach(() => {
    fakeAnimalsRepository = new FakeAnimalsRepository();
    showAnimalsService = new ShowAnimalsService(fakeAnimalsRepository);
    createAnimalService = new CreateAnimalService(fakeAnimalsRepository);
  });

  it('should be able return all animals subscribed', async () => {
    const animals = await showAnimalsService.execute();

    expect(animals).toEqual([]);
  });

  it('should be able return one animal subscribed', async () => {
    await createAnimalService.execute({
      name: 'Test',
      age_months: 19,
      type: 'Cavalo',
      weight: 120,
    });

    const animals = await showAnimalsService.execute();

    expect(animals.length).toEqual(1);
  });
});
