import { Title } from './components/Title'
import BrowserSafari from './assets/icons/browser-safari.svg?react'

export function App() {
    return (
        <>
            <Title>Vite + React + Typescript (manual setup)</Title>
            <BrowserSafari width={60} height={60} color='red' />
        </>
    )
}