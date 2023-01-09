import { Test, TestingModule } from '@nestjs/testing';
import { SacsController } from './sacs.controller';
import { SacsService } from './sacs.service';

describe('SacsController', () => {
  let controller: SacsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SacsController],
      providers: [SacsService],
    }).compile();

    controller = module.get<SacsController>(SacsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
