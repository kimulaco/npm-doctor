import { Module } from '@nestjs/common'
import { NpmPackageController, NpmSizeController } from './npm.controller'
import { NpmService } from './npm.service'

@Module({
  controllers: [NpmPackageController, NpmSizeController],
  providers: [NpmService]
})
export class NpmModule {}
