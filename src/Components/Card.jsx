import React from 'react'

export const Card = ({ copy, image }) => {
  return (
    <div style={styles.Container(image)}>
      <p style={styles.Text}>{copy}</p>
    </div>
  )
}

const styles = {
  Container: (img) => ({
    boxSizing: 'border-box',
    border: '2px solid transparent',
    minWidth: '266px',
    height: '354px',
    padding: '22px 21px',
    borderRadius: '14px',
    backgroundImage: `url(${img}) `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }),
  Text: {
    fontSize: '27px',
    lineHeight: '32px',
    color: 'white',
    fontWeight: 'bold',
  },
}
