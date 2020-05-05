import React from 'react'

type Props = {
  children: React.ReactNode
}

const AppMain: React.FC<Props> = ({ children }: Props) => {
  return (
    <main className="AppMain">
      <div className="AppMain_inner">
        {children}
      </div>
    </main>
  )
}

export default AppMain
