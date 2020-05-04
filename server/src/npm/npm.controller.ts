import { Controller, Get, Param } from '@nestjs/common'
import { NpmService } from './npm.service'

@Controller('api/npm')
export class NpmController {
  constructor(private NpmService: NpmService) {}

  @Get(':name')
  async getNPM(@Param('name') name: string): Promise<any> {
    const packageJSON = await this.NpmService.getPackageJSON(name)
    return packageJSON
  }
}
