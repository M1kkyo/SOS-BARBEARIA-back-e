import { Module } from '@nestjs/common';
import { TclService } from './tcl.service';
import { TclController } from './tcl.controller';

@Module({
  controllers: [TclController],
  providers: [TclService],
})
export class TclModule {}
