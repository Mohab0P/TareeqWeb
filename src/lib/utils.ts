import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Helper function to get the correct path for static assets like images
 * Works in both development and production with different basePaths
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For production (GitHub Pages), use a relative path
  // For development, use an absolute path
  return cleanPath;
}
