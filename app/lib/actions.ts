'use server'
import {z} from 'zod';

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
  });
  const CreateInvoice = FormSchema.omit({ id: true, date: true });
export const createInvoice = (formData: FormData) => {
    const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      });
    console.log({ customerId, amount, status });
}