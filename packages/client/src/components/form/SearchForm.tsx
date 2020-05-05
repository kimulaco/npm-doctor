import React, { useState } from 'react'

type Props = {
  id: string
  placeholder: string
  onSubmit: (value: string) => any
}

const initialProps: Props = {
  id: '',
  placeholder: '',
  onSubmit: () => {}
}

const SearchForm: React.FC<Props> = (
  { id, placeholder, onSubmit }: Props = initialProps
) => {
  const [value, setValue] = useState('')

  return (
    <form
      className="SearchForm"
      onSubmit={(event: any) => {
        event.preventDefault()
        if (typeof onSubmit === 'function') {
          onSubmit(value)
        }
      }}
    >
      <div className="SearchForm_inner">
        <div className="SearchForm_form">
          <label
            className="SearchForm_label"
            htmlFor={id || ''}
          >npm package name</label>
          <input
            className="SearchForm_input"
            id={id || ''}
            name={id || ''}
            placeholder={placeholder || ''}
            value={value}
            type="text"
            onChange={(event: any) => {
              setValue(event.currentTarget.value)
            }}
          />
        </div>
        <button className="SearchForm_button" type="submit">Search</button>
      </div>
    </form>
  )
}

export default SearchForm
