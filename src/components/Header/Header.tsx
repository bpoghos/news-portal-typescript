import React, { useState } from 'react'
import styles from './Header.module.css'
import { FaAngleDown } from 'react-icons/fa6'

const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false)



    return (
        <header className={styles.header}>
            <nav className={styles.menu}>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
                <div className={styles.profileBox} onClick={() => setIsOpen((prevState) => !prevState)}><div className={styles.profile}></div><FaAngleDown /></div>
                {isOpen ?
                    <div className={styles.profileMenu}>
                        <ul>
                            <li>Profile</li>
                            <li>Settings</li>
                            <li>Sign out</li>
                        </ul>
                    </div> : null
                }
            </nav>
        </header>
    )
}

export default Header