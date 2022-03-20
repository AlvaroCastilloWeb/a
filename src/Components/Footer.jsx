import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../Assets/icons/facebook.png'
import instagram from '../Assets/icons/instagram.png'

const Social = [
  {
    icon: 'facebook',
    link: '',
    img: facebook,
  },
  {
    icon: 'twitter',
    link: '',
    img: '',
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/healz.mx/',
    img: instagram,
  },
  {
    icon: 'linkedin',
    link: '',
    img: '',
  },
]

const Links = [
  {
    name: 'Inicio',
    link: '/',
  },
  {
    name: 'Aviso de Privacidad',
    link: '/Legal',
  },
]

export const Footer = () => {
  const { breakpoints } = useTheme()
  const isDesktop = useMediaQuery(breakpoints.up('lg'))

  return (
    <div style={styles.Container}>
      <div style={isDesktop ? styles.ContaintDesktop : styles.Containt}>
        <div style={styles.Menu}>
          {Links.map((item, index) => (
            <Link to={item.link} key={index} href="#" style={styles.LinkStyle}>
              {item.name}
            </Link>
          ))}
        </div>
        <div style={styles.Social}>
          {Social.map((item, index) => {
            const { icon, link, img } = item
            if (link !== '') {
              return (
                <a
                  key={index}
                  href={link}
                  style={styles.SocialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={img} alt={icon} style={styles.SocialImg} />
                </a>
              )
            }
          })}
        </div>
        <div style={styles.Menu}>
          <p style={styles.Legales}>© 2022 Healz </p>
        </div>
        <div style={styles.Menu}>
          <p style={styles.Copy}>Hecho con 💚 por Healz</p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  Container: {
    boxSizing: 'border-box',
    minWidth: '360px',
    backgroundColor: '#AED5DA',
  },
  Containt: {
    maxWidth: '1366px',
    margin: '0 auto',
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '40px 0',
  },
  ContaintDesktop: {
    maxWidth: '1366px',
    margin: '0 auto',
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 0',
    flexDirection: 'row',
  },
  Menu: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LinkStyle: {
    width: '100%',
    textAlign: 'center',
    borderBottom: `1px solid rgba(255, 255, 255, 0.19)`,
    borderTop: `1px solid rgba(255, 255, 255, 0.19)`,
    padding: '20px 0 20px 0',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#025951',
  },
  Copy: {
    width: '100%',
    textAlign: 'center',
    marginTop: '5px',
    fontWeight: 'bold',
    color: '#025951',
  },
  Legales: {
    width: '100%',
    margin: '20px auto 0 auto',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#025951',
  },
  Social: {
    boxSizing: 'border-box',
    margin: '40px auto',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
  },
  SocialImg: {
    width: '35px',
  },
}
