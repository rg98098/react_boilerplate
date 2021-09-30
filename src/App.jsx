import React from 'react'
import useFetch from 'react-fetch-hook'
import './styles/main.scss'

const App = () => {
  const { isLoading, data: contentData } = useFetch(
    '/public/content/en-us.json'
  )

  if (isLoading) {
    return 'loading...'
  }
  const { heading } = contentData
  return (
    <div>
      {heading.value}
    </div>
  )
}

export default App
