import { useContext } from 'react'
import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { AuthContext } from './contexts/auth'

// named export ao invés de usar o export default no final, o named obriga usar o mesmo nome qnd importa
export function App() {
    const { user } = useContext(AuthContext);

    return (
        <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
            <MessageList />
            {/*if not null*/ !!user ? <SendMessageForm /> : <LoginBox />}
        </main>
    )
}
