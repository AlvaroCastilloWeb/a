import { isEmail } from 'validator'

export const ValidateEmail = (email = '') => {
  return isEmail(email)
}
