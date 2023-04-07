export type InputSize = 'sm' | 'md' | 'lg'

export type HTMLInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
>
