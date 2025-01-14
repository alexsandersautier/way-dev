import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Seja bem-vindo ao exemplo de navegação no React</h1>
        </div>
      </main>
    </div>
  );
}
