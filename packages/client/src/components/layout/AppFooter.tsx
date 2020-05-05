import React from 'react'

type Props = {
  children?: React.ReactNode
}

const AppFooter: React.FC<Props> = ({ children }: Props) => {
  return (
    <footer className="AppFooter">
      <div className="AppFooter_inner">
        {children}
        <p className="AppFooter_copyright">
          <small>&copy; 2020 npm doctor.</small>
        </p>
      </div>
    </footer>
  )
}

export default AppFooter
