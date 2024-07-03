import styles from './header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<img src="/logo.png" alt="logo" />
		</header>
	)
}