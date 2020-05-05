import React from 'react'
import Head from 'next/head'
import AppHeader from './AppHeader'
import AppMain from './AppMain'
import AppFooter from './AppFooter'

type Props = {
  children?: React.ReactNode
  title?: string
}

type PropsOptional = {
  children: React.ReactNode
  title: string
}

const AppLayoutDefault: React.FC<PropsOptional> = (
  { children, title }: Props
) => {
  return <>
    <Head>
      <title>{title ? `${title} - ` : ''}npm doctor</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0,width=device-width" />
    </Head>
    <div className="AppLayout">
      <AppHeader />
      <AppMain>
        {children}
      </AppMain>
      <AppFooter />
    </div>
  </>
}

export default AppLayoutDefault
