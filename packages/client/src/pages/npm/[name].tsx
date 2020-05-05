import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Layout from '../../components/Layout'
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

  useEffect(() => {
    if (!npmName) {
      return
    }
    setMounted(true)
  }, [router.query.name])

  return (
    <Layout title={String(npmName || '')}>
      <h1 className="mb-0">{npmName}</h1>
      <pre>{JSON.stringify(npmPackage, null, '  ')}</pre>
      <pre>{JSON.stringify(npmSize, null, '  ')}</pre>
    </Layout>
  )
}

export default NpmPage
