import { ErrorMessage } from 'formik'

export function ValidationError ({ name }) {
  return <ErrorMessage style={{ color: 'red', fontStyle: "bold" }} component='div' name={name} />
}
