import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// 클래스 네임 병합
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
