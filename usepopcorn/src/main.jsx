import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './AppV1.jsx'
import Appv2 from './Appv2.jsx'
import Appv3 from './Appv3.jsx'

import StarRating from './StarRating'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Appv2/> */}
        <Appv3/>

    {/* <StarRating maxRating={5} /> */}
 
  </StrictMode>,
)
