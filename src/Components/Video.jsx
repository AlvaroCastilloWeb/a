import React from 'react'

export const Video = () => {
  return (
    <div style={styles.Container}>
      <div style={styles.Content}>
        <video src="videofile.ogg" poster="posterimage.jpg">
          Tu navegador no admite el elemento <code>video</code>.
        </video>
      </div>
    </div>
  )
}

const styles = {
  Container: {
    boxSizing: 'border-box',
    border: '2px solid red',
    minWidth: '360px',
    padding: '40px 20px 20px 20px',
    marginBottom: '30px',
  },
  Content: {
    boxSizing: 'border-box',
    border: '2px solid red',
  },
}
