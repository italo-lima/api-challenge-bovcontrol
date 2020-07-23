import { container } from 'tsyringe';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import AnimalRepository from '@modules/animals/infra/typeorm/repositories/AnimalRepository';

container.registerSingleton<IAnimalsRepository>(
  'AnimalRepository',
  AnimalRepository,
);
