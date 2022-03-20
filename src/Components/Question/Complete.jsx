import { Typography } from '@mui/material'
import React from 'react'
import Check from '../../Assets/icons/check.png'

export const Complete = () => {
  return (
    <div style={styles.Container}>
      <div style={styles.Icon}>
        <img style={styles.Image} src={Check} alt="Completado" />
      </div>
      <Typography
        fontSize={16}
        fontWeight={600}
        style={{
          textAlign: 'center',
          color: '#103B3C',
          marginBottom: '27px',
        }}
      >
        ¡Gracias por tus respuestas y por ser parte de healz!
      </Typography>
      <Typography
        fontSize={16}
        fontWeight={600}
        style={{
          textAlign: 'center',
          color: '#103B3C',
          marginBottom: '27px',
        }}
      >
        Muy pronto tendrás noticias de nuestro lanzamiento oficial y línea de
        productos
      </Typography>
    </div>
  )
}

const styles = {
  Container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px',
    padding: '10px',
  },
  Icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '58px',
    marginBottom: '33px',
  },
  Image: {
    with: '73px',
    height: '73px',
  },
}
