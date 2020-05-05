import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import AppLayoutDefault from '../../components/layout/AppLayoutDefault'
import { toByteString } from '../../utils/filter'
import { getQueryOne } from '../../utils/query'
import { fetcher } from '../../utils/fetch'

const NpmPage = () => {
  const router = useRouter()
  const npmName: string = getQueryOne(router.query.name)
  const [isMounted, setMounted] = useState(false)
  const { data: npmPackage } = useSWR(
    isMounted ? `/api/npm/package/${npmName}` : null,
    fetcher
  )
  const { data: npmSize } = useSWR(
    isMounted ? `/api/npm/size/${npmName}` : null,
    fetcher
  )
  const npmNameWithVersion = isMounted && npmPackage
    ? `${npmPackage.name}@${npmPackage.version}`
    : npmName

  const NpmPackageDetail = () => {
    if (!npmPackage) {
      return <></>
    }
    return (
      <section className="Card mt-md">
        <h2 className="Card_name">Package</h2>
        <dl className="DetailList">
          <div className="DetailList_item">
            <dt className="DetailList_title">License</dt>
            <dd className="DetailList_data">
              {npmPackage.license || 'Unknown'}
            </dd>
          </div>
          <div className="DetailList_item">
            <dt className="DetailList_title">npm</dt>
            <dd className="DetailList_data">
              <a
                href={`https://www.npmjs.com/package/${npmName}`}
                target="_blank"
              >
                {`https://www.npmjs.com/package/${npmName}`}
              </a>
            </dd>
          </div>
          <div className="DetailList_item">
            <dt className="DetailList_title">Home Page</dt>
            <dd className="DetailList_data">
              <a href={npmPackage.homepage} target="_blank">
                {npmPackage.homepage}
              </a>
            </dd>
          </div>
        </dl>
      </section>
    )
  }

  const NpmSize = () => {
    if (!npmPackage || !npmSize) {
      return <></>
    }
    return (
      <section className="Card mt-md">
        <h2 className="Card_name">Size</h2>
        <dl className="DetailList -column-2">
          <div className="DetailList_item">
            <dt className="DetailList_title">Bundle Size</dt>
            <dd className="DetailList_data text-right">
              {toByteString(npmSize.size) || 'Unknown'}
            </dd>
          </div>
          <div className="DetailList_item">
            <dt className="DetailList_title">Minified Size</dt>
            <dd className="DetailList_data text-right">
              {toByteString(npmSize.minifiedSize) || 'Unknown'}
            </dd>
          </div>
          <div className="DetailList_item">
            <dt className="DetailList_title">Gzip Size</dt>
            <dd className="DetailList_data text-right">
              {toByteString(npmSize.gzippedSize) || 'Unknown'}
            </dd>
          </div>
          <div className="DetailList_item">
            <dt className="DetailList_title">Unpacked Size</dt>
            <dd className="DetailList_data text-right">
              {toByteString(npmPackage.unpackedSize) || 'Unknown'}
            </dd>
          </div>
        </dl>
      </section>
    )
  }

  useEffect(() => {
    if (!npmName) {
      return
    }
    setMounted(true)
  }, [router.query.name])

  return (
    <AppLayoutDefault title={String(npmNameWithVersion || '')}>
      <h1 className="NpmName">{npmNameWithVersion}</h1>
      <NpmPackageDetail />
      <NpmSize />
    </AppLayoutDefault>
  )
}

export default NpmPage
