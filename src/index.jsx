import './style.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import Scene from './Scene'
import { ThemeContextProvider } from './Components/ThemeContext'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <ThemeContextProvider>
            <Scene />
        </ThemeContextProvider>
        {/* <Analytics /> */}
    </StrictMode>
)