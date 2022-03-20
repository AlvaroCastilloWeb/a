import React from 'react'
import { Card } from './Card'
import { useMediaQuery, useTheme } from '@mui/material'

import SlideUno from '../Assets/img/slideUno.png'
import SlideDos from '../Assets/img/slideDos.png'
import SlideTres from '../Assets/img/slideTres.png'

const Cards = [
  {
    copy: 'La mejor versión de ti',
    image: SlideUno,
  },
  {
    copy: 'Tu salud siempre es primero',
    image: SlideDos,
  },
  {
    copy: 'Sin las salas de espera',
    image: SlideTres,
  },
]

export const Slide = () => {
  const { breakpoints } = useTheme()
  const isDesktop = useMediaQuery(breakpoints.up('lg'))

  return (
    <div style={isDesktop ? styles.ContainerDesktop : styles.Container}>
      <div style={styles.Content}>
        <div style={styles.Text}>
          <p style={isDesktop ? styles.TitleDesktop : styles.Title}>
            Conoce los tratamientos en los que <br />
            <span style={styles.SubTitle}>
              confían los médicos, te encantarán{' '}
            </span>
          </p>
        </div>
        <div style={styles.Image}>
          {Cards.map((card, index) => {
            const { copy, image } = card
            return <Card key={index} copy={copy} image={image} />
          })}
        </div>
      </div>
    </div>
  )
}

const styles = {
  Container: {
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    minWidth: '360px',
  },
  ContainerDesktop: {
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    minWidth: '360px',
    padding: '75px 40px',
  },
  Content: {
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '1366px',
    margin: '0 auto',
  },
  Text: {
    padding: '0px 20px 0px 20px',
    width: '100%',
  },
  Title: {
    padding: '10px 0 0 0',
    width: '90%',
    fontSize: '16px',
    lineHeight: '18px',
    fontWeight: 'bold',
  },
  TitleDesktop: {
    padding: '10px 0 0 0',
    width: '90%',
    fontSize: '30px',
    lineHeight: '30px',
    fontWeight: 'bold',
  },
  SubTitle: {
    fontSize: '15px',
    lineHeight: '18px',
    fontWeight: 'bold',
    color: '#6D6D6D',
  },
  Image: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    maxWidth: '1366px',
    overflow: 'auto',
    alignItems: 'center',
    minWidth: '300px',
    padding: '23px 23px 42px 25px',
  },
}
