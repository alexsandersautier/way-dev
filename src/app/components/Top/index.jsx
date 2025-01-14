import Link from 'next/link';
import styles from './top.module.css';

export default function Top() {
    return (
        <header className={styles.container_topo}>
            <h1>Navegação React</h1>
            <nav>
                <Link className={styles.link_frontend} href="/frontend">Frontend</Link>
                <Link className={styles.link_backend} href="/backend">Backend</Link>
                <Link className={styles.link_mobile} href="/mobile">Mobile</Link>
            </nav>
        </header>
    );
}