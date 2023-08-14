import { z } from 'zod';

export const emailSchema = z
  .string()
  .email('auth.errors.email-invalid')
  .nonempty('auth.errors.email-required');
