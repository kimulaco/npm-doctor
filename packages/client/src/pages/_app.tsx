import React from 'react'
import '../assets/css/define.css'
import '../assets/css/base.css'

type Props = {
  Component: any
  pageProps: any
}

const App: React.FC<Props> = ({ Component, pageProps }: Props) => {
  return <Component {...pageProps} />
}

export default App
