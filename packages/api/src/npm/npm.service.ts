import { Injectable, HttpStatus, HttpException } from '@nestjs/common'
import packageJSON from 'package-json'
import * as packageSize from 'package-size'
import { NpmSize, NpmPackage } from '../../../../types/npm.types'

@Injectable()
export class NpmService {
  async getNpmPackage(npmName: string): Promise<NpmPackage> {
    const [name, version]: string[] = npmName.split('@')
    try {
      const npmPackage: any = await packageJSON(name, {
        version: version || 'latest',
        fullMetadata: true
      })
      return {
        name: npmPackage.name,
        description: npmPackage.description,
        version: npmPackage.version,
        repository: npmPackage.repository,
        license: npmPackage.license,
        homepage: npmPackage.homepage,
        unpackedSize: npmPackage.dist.unpackedSize
      }
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Failed get package.json of npm.',
      }, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async getNpmSize(npmName: string): Promise<NpmSize> {
    try {
      const npmSize = await packageSize(npmName, {
        target: 'node'
      })
      return {
        size: npmSize.size,
        minifiedSize: npmSize.minified,
        gzippedSize: npmSize.gzipped
      }
    } catch (error) {
      console.log(error)
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'Failed get package size of npm.',
      }, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
