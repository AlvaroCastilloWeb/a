import React, { useState } from 'react'
import { Check } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { ValidateEmail } from '../../utils/validations'

export const PersonalData = ({
  Email,
  setEmail,
  Name,
  setName,
  lastName,
  setlastName,
}) => {
  return (
    <div style={styles.Container}>
      <TextField
        fullWidth
        id="name"
        label="Nombre *"
        variant="standard"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        id="lastName"
        label="Apellido *"
        variant="standard"
        value={lastName}
        onChange={(e) => setlastName(e.target.value)}
      />
      <TextField
        color={ValidateEmail(Email) ? 'success' : 'primary'}
        value={Email}
        fullWidth
        label="Email *"
        variant="standard"
        onChange={({ target }) => {
          setEmail(target.value)
        }}
        InputProps={{
          style: {
            borderRadius: 8,
          },
          endAdornment: ValidateEmail(Email) ? (
            <Check color={'success'} />
          ) : null,
        }}
      />
    </div>
  )
}

const styles = {
  Container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '20px',
  },
}

/**
 *
 */
