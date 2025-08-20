import { useState } from 'react'
import MovieList from './components/MovieList'
import MovieInput from './components/MovieInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MovieInput/>
   <MovieList/>
    </>
  )
}

export default App
