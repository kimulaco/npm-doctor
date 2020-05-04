import { Module } from '@nestjs/common'
import { NpmController } from './npm.controller'
import { NpmService } from './npm.service'

@Module({
  controllers: [NpmController],
  providers: [NpmService]
})
export class NpmModule {}
