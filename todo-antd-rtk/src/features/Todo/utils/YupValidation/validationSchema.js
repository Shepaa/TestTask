import * as Yup from 'yup'

export const validationSchema = Yup.object({
  title: Yup.string().min(3).required(),
});