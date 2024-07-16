/**
 * Tailwind Merger
 * @see https://github.com/dcastil/tailwind-merge
 *
 * This is a simple utility function that merges Tailwind CSS classes with the clsx utility.
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
