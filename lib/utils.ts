import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export type NavItem = {
  id: number;
  title: string;
  url: string;
  offset?: number;
};