import * as yup from 'yup';

export const paymentValidationSchema = yup.object().shape({
  payment_date: yup.date().required(),
  amount: yup.number().integer().required(),
  payment_method: yup.string().required(),
  user_id: yup.string().nullable().required(),
  invoice_id: yup.string().nullable().required(),
});
