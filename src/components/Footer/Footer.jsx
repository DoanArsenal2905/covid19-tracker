import React from 'react'

import { Typography } from '@material-ui/core'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <Typography color='textPrimary'>Made by Ngo Quoc Doan 😷😷😷</Typography>
    </div>
  );
}

export default Footer;