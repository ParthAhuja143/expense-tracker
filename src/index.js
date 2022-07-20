import React from 'react'
import ReactDOM from "react-dom"
import App from './App'
import { Provider } from './context/context'
import './index.css'
import {SpeechProvider} from '@speechly/react-client'

ReactDOM.render(
<SpeechProvider appId="e6ef73dd-650f-466e-8903-18a8324ebe1e" language="en-US" >
<Provider>
<App/>
</Provider>
</SpeechProvider> ,
     document.getElementById('root')
 )