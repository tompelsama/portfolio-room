import './style.css'
import ReactDOM from 'react-dom/client'
import Scene from './Scene'
import { StrictMode } from 'react'
import { ThemeContextProvider } from './Components/ThemeContext'
import { Analytics } from '@vercel/analytics/react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <ThemeContextProvider>
            <Scene />
        </ThemeContextProvider>
        <Analytics />
    </StrictMode>
)