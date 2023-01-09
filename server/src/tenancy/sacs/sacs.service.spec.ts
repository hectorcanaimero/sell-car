import { Test, TestingModule } from '@nestjs/testing';
import { SacsService } from './sacs.service';

describe('SacsService', () => {
  let service: SacsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SacsService],
    }).compile();

    service = module.get<SacsService>(SacsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
