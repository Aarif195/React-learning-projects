import { useState } from 'react'

import DateCounter from './DateCounter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DateCounter/>
    </>
  )
}

export default App
