import { Test, TestingModule } from '@nestjs/testing';
import { TclService } from './tcl.service';

describe('TclService', () => {
  let service: TclService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TclService],
    }).compile();

    service = module.get<TclService>(TclService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
