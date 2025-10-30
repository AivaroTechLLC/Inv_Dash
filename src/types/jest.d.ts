/**
 * Global type definitions for Jest and testing utilities
 */

import '@testing-library/jest-dom'

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveTextContent(text: string | RegExp): R
      toHaveAttribute(attribute: string, value?: string): R
      toHaveClass(className: string): R
      toBeVisible(): R
      toBeEnabled(): R
      toBeDisabled(): R
      toHaveValue(value: string | number): R
      toHaveDisplayValue(value: string | RegExp | Array<string | RegExp>): R
      toBeChecked(): R
      toHaveFocus(): R
      toBeInvalid(): R
      toBeValid(): R
      toBeRequired(): R
      toHaveStyle(css: Record<string, any> | string): R
      toHaveAccessibleDescription(text?: string | RegExp): R
      toHaveAccessibleName(text?: string | RegExp): R
    }
  }
}

export {}