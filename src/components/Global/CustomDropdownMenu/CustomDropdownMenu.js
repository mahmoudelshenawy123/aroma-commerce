import i18next from 'i18next';
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './CustomDropdownMenu.module.css'
function CustomDropdownMenu({title,linkClass,children}) {
  return (
    <div className={styles["custom-dropdown"]}>
        <p className={linkClass}>{title}</p>
        <div className={styles["custom-dropdown-menu"]}>
            <ul className={styles["custom-dropdown__list"]}>
              {children}
            </ul>
        </div>
    </div>
  )
}
export default CustomDropdownMenu