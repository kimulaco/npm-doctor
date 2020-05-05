import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode
  title?: string
}

type PropsOptional = {
  children: React.ReactNode
  title: string
}

const DEFAULT_TITLE = 'npm doctor'

const Layout: React.FC<PropsOptional> = (
  { children, title = DEFAULT_TITLE }: Props
) => {
  return <div>
    <Head>
      <title>{title || DEFAULT_TITLE}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0,width=device-width" />
    </Head>
    <header>
      <p>
        <Link href="/"><a>{title}</a></Link>
      </p>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <p><small>&copy; 2020 npm doctor.</small></p>
    </footer>
  </div>
}

export default Layout
