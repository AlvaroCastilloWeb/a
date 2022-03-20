import React from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery, useTheme } from '@mui/material'

import Logo from '../Assets/img/Logo.png'

export const Header = () => {
  const { breakpoints } = useTheme()
  const isTablet = useMediaQuery(breakpoints.up('md'))

  return <>{isTablet ? <NavBarDesktop /> : <NavBar />}</>
}

const NavBar = () => {
  return (
    <header style={styles.Header}>
      <nav style={styles.Nav}>
        <div className="Logo">
          <Link to="/">
            <img style={styles.img} src={Logo} alt="Healz" />
          </Link>
        </div>
      </nav>
    </header>
  )
}
const NavBarDesktop = () => {
  return (
    <header style={stylesDesktop.Header} id="Home">
      <nav style={stylesDesktop.Nav}>
        <div>
          <Link to="/">
            <img style={styles.img} src={Logo} alt="Healz" />
          </Link>
        </div>
        <ul style={stylesDesktop.Menu}>
          <li>
            <Link to="/legal" style={stylesDesktop.To} href="#">
              Aviso de privacidad
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const styles = {
  Header: {
    boxSizing: 'border-box',
    minWidth: '360px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 20px',
    backgroundColor: '#AED5DA',
    marginTop: '0',
  },
  Menu: {
    display: 'none',
  },
  Nav: {
    maxWidth: '1366px',
    width: '100%',
    margin: '0 auto',
  },
  img: {
    padding: '5px 0px',
    width: '80.21px',
    height: '25px',
  },
}

const stylesDesktop = {
  Header: {
    boxSizing: 'border-box',
    minWidth: '360px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '55px 50px',
    backgroundColor: '#AED5DA',
    marginTop: '0',
    position: 'sticky',
    top: '0',
  },
  Nav: {
    maxWidth: '1366px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Menu: {
    listStyle: 'none',
  },
  To: {
    color: '#025951',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  img: {
    padding: '5px 0px',
    width: '200px',
    height: 'auto',
  },
}
