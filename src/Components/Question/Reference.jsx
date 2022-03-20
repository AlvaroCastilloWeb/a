import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import React from 'react'

const Problems = [
  {
    value: 'Perdida de cabello',
    label: 'Perdida de cabello',
  },
  {
    value: 'Disfuncion Erectil',
    label: 'Disfuncion Erectil',
  },
]

export const Reference = ({ Age, setAge, Treatment, setTreatment }) => {
  const handleChange = (event) => {
    setTreatment(event.target.value)
  }

  return (
    <div style={styles.Container}>
      <Box sx={{ minWidth: 120 }}>
        <Typography
          fontSize={16}
          style={{
            textAlign: 'center',
            marginBottom: '12px',
          }}
        >
          ¿Qué tratamiento te interesaría?
        </Typography>
        <FormControl variant="standard" fullWidth>
          <Select id="Tratamiento" value={Treatment} onChange={handleChange}>
            {Problems.map(({ value, label }) => (
              <MenuItem key={value + label} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ minWidth: 120 }}>
          <Typography
            fontSize={16}
            style={{
              textAlign: 'center',
              marginTop: '20px',
              marginBottom: '22px',
            }}
          >
            ¿Cuál es tu edad?
          </Typography>
          <TextField
            fullWidth
            id="Edad"
            label="Edad"
            variant="standard"
            value={Age}
            onChange={({ target }) => {
              setAge(target.value)
            }}
          />
        </Box>
      </Box>
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
  },
}
