export type NpmPackage = {
  name: string
  description?: string
  version: string
  repository?: string | {
    type?: string
    url?: string
    directory?: string
  }
  license?: string
  homepage?: string
  unpackedSize: number | null
}

export type NpmSize = {
  size: number | null
  minifiedSize: number | null
  gzippedSize: number | null
}
