import {FunctionComponent} from 'react'
import Container from '../components/related-pages-stuffs/main/container'
import styles from '../styles/main.module.scss'
export const MainApplication:FunctionComponent = () => {
    return <div className={styles.container}>
        <h1>Note-Hanging Application</h1>
        <Container/>
    </div>
}


export default MainApplication