import Router from 'next/router'
import AppLayoutDefault from '../components/layout/AppLayoutDefault'
import SearchForm from '../components/form/SearchForm'

const IndexPage = () => {
  return (
    <AppLayoutDefault title="npm doctor">
      <SearchForm
        id="package_name"
        placeholder="react"
        onSubmit={(packageName: string) => {
          Router.push({ pathname: `/npm/${packageName}` })
        }}
      />
    </AppLayoutDefault>
  )
}

export default IndexPage
