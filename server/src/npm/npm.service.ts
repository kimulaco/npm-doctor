import { Injectable } from '@nestjs/common'
import packageJSON from 'package-json'
import * as packageSize from 'package-size'

const parsePackageJSON = (packageJSON) => {
  return {
    name: packageJSON.name,
    description: packageJSON.description,
    version: packageJSON.version,
    repository: packageJSON.repository,
    keywords: packageJSON.keywords,
    author: packageJSON.author,
    maintainers: packageJSON.maintainers,
    license: packageJSON.license,
    homepage: packageJSON.homepage,
    unpackedSize: packageJSON.dist.unpackedSize
  }
}

@Injectable()
export class NpmService {
  async getPackageJSON(npmName: string): Promise<any> {
    const [name, version] = npmName.split('@')
    const [remotePackageJSON, npmSize] = await Promise.all([
      packageJSON(name, {
        version: version || 'latest',
        fullMetadata: true
      }),
      packageSize(npmName)
    ])
    return {
      ...parsePackageJSON(remotePackageJSON),
      size: npmSize.size,
      minifiedSize: npmSize.minified,
      gzippedSize: npmSize.gzipped,
    }
  }
}
