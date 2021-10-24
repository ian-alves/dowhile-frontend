import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'

// named export ao invés de usar o export default no final, o named obriga usar o mesmo nome qnd importa
export function App() {
    return (
        <main className={styles.contentWrapper}>
            <MessageList />
            <LoginBox />
        </main>
    )
}
