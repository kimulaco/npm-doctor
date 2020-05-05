import { Controller, Get, Param } from '@nestjs/common'
import { NpmService } from './npm.service'
import { NpmSize, NpmPackage } from '../../../types/npm.types'

@Controller('api/npm/package')
export class NpmPackageController {
  constructor(private npmService: NpmService) {}

  @Get(':name')
  getNpmPackage(@Param('name') name: string): Promise<NpmPackage> {
    return this.npmService.getNpmPackage(name)
  }
}

@Controller('api/npm/size')
export class NpmSizeController {
  constructor(private npmService: NpmService) {}

  @Get(':name')
  getNpmSize(@Param('name') name: string): Promise<NpmSize> {
    return this.npmService.getNpmSize(name)
  }
}
