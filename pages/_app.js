import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

/* This page is neccesary to apply global styles at NextJS */
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}