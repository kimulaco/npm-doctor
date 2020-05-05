import React from 'react'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode
}

const AppHeader: React.FC<Props> = ({ children }: Props) => {
  return (
    <header className="AppHeader">
      <div className="AppHeader_inner">
        <p className="AppHeader_title">
          <Link href="/"><a className="AppHeader_link">npm doctor</a></Link>
        </p>
        {children}
      </div>
    </header>
  )
}

export default AppHeader
