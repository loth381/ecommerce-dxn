import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases utilizando `clsx` para condicionales y `twMerge` para fusionar
 * clases de Tailwind CSS, asegurando que las clases duplicadas se eliminen.
 *
 * @param inputs - Las clases a combinar.
 * @returns - Las clases combinadas.
 */
export function cn(...inputs: ClassValue[]): string {
  // Usa `clsx` para combinar clases condicionalmente y `twMerge` para eliminar duplicados
  return twMerge(clsx(inputs));
}
