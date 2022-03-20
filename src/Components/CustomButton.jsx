import { Button } from '@mui/material'
import React from 'react'

export const CustomButton = ({
  text,
  style,
  onClick,
  endIcon = null,
  size = 'medium',
  disabled = false,
  variant = 'text',
  color = 'inherit',
  startIcon = null,
  disableElevation = true,
}) => {
  return (
    <Button
      size={size}
      style={{ ...style, fontWeight: 'bold' }}
      color={color}
      onClick={onClick}
      variant={variant}
      endIcon={endIcon}
      disabled={disabled}
      startIcon={startIcon}
      disableElevation={disableElevation}
    >
      {text}
    </Button>
  )
}
