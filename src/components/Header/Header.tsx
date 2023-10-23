import React from 'react'
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <h2>Carousel</h2>
            </div>
            <div className={styles.menu}>
                <a href="#">Home</a>
                <a href="#">Link</a>
                <a href="#">Disabled</a>
            </div>
        </header>
    )
}
