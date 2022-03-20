import React, { useState } from 'react'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { ArrowForward } from '@mui/icons-material'

import { Complete } from './Question/Complete'
import { PersonalData } from './Question/PersonalData'
import { Reference } from './Question/Reference'
import { Tracking } from './Question/Tracking'
import { CustomButton } from './CustomButton'

import { ValidateEmail } from '../utils/validations'
import { sendData } from '../Api/sendData'

const steps = ['', '']

export const Form = () => {
  const [activeStep, setActiveStep] = useState(0)

  const [Email, setEmail] = useState('')
  const [Name, setName] = useState('')
  const [lastName, setlastName] = useState('')
  const [Age, setAge] = useState('')
  const [Treatment, setTreatment] = useState('')

  const data = {
    first_name: Name,
    last_name: lastName,
    email: Email,
    treatment: Treatment,
    treatment_duration_count: '',
    treatment_duration_period: '',
    current_treatment: '',
    age: Age,
  }

  // manejo de los pasos

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    if (activeStep === steps.length - 1) {
      handleSend()
    }
  }

  // send data
  const handleSend = async () => {
    const result = await sendData(data)
    console.log(result)
  }
  // send data

  const enableNext = () => {
    if (activeStep === 0 && !ValidateEmail(Email)) {
      return true
    } else {
      return false
    }
  }

  return (
    <div style={styles.Container}>
      <div style={styles.Header}>
        <p style={styles.Caption}>
          ¡Contesta este cuestionario y obtén 20% en tu primer pedido en healz!
        </p>
      </div>
      {activeStep === steps.length ? (
        <Complete />
      ) : (
        <>
          <div style={styles.ProgressBar}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => {
                const stepProps = {}
                const labelProps = {}
                return (
                  <Step key={'step' + label + index} {...stepProps}>
                    <StepLabel
                      key={'step1' + label + (index + 10)}
                      {...labelProps}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                )
              })}
            </Stepper>
          </div>
          <div style={styles.Forms}>
            {activeStep === 0 && (
              <PersonalData
                Name={Name}
                setName={setName}
                lastName={lastName}
                setlastName={setlastName}
                Email={Email}
                setEmail={setEmail}
              />
            )}
            {activeStep === 1 && (
              <Reference
                Age={Age}
                setAge={setAge}
                Treatment={Treatment}
                setTreatment={setTreatment}
              />
            )}
            {activeStep === 2 && <Tracking />}
          </div>
          <div style={styles.Buttons}>
            <CustomButton
              text={
                activeStep === steps.length - 1 ? 'FINALIZADO' : 'SIGUIENTE'
              }
              color={'primary'}
              variant={'contained'}
              endIcon={
                activeStep === steps.length - 1 ? null : <ArrowForward />
              }
              style={{
                margin: '0 auto',
                width: '224px',
                height: '50px',
                textTransform: 'none',
                borderRadius: '30px',
                backgroundColor: '#038C7F',
              }}
              disabled={enableNext()}
              onClick={handleNext}
            />
          </div>
        </>
      )}
    </div>
  )
}

const styles = {
  Container: {
    boxSizing: 'border-box',
    minWidth: '321px',
    width: '321px',
    backgroundColor: '#fff',
    zIndex: '0',
    marginTop: '-24px',
    borderRadius: '24px',
    boxShadow: `0px 0px 20px rgba(0, 0, 0, 0.25)`,
    padding: '46px 10px 17px 10px',
  },
  Header: {
    marginBottom: '20px',
  },
  Caption: {
    fontSize: '15px',
    LineHeight: '11px',
    padding: '0px 20px 10px 20px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ProgressBar: {
    paddingTop: '20px',
    marginBottom: '40px',
  },
  Forms: {
    padding: '0px 20px',
  },
  Buttons: {
    marginTop: '40px',
    display: 'grid',
    placeContent: 'center',
  },
}
