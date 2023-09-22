import { Test, TestingModule } from '@nestjs/testing';
import { TclController } from './tcl.controller';
import { TclService } from './tcl.service';

describe('TclController', () => {
  let controller: TclController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TclController],
      providers: [TclService],
    }).compile();

    controller = module.get<TclController>(TclController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
