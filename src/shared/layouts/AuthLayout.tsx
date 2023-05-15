import classNames from 'classnames'

import { Logo } from '@/shared/components/Logo'

interface AuthLayoutProps {
  children?: React.ReactNode
}

export const AuthLayout = ({ children }: AuthLayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <header
      className={classNames(
        'sticky top-0 z-10',
        'flex items-center justify-center',
        'border-b border-b-gray-100 bg-white',
        'h-[var(--header-height)] px-4 md:px-8 '
      )}
    >
      <Logo size="sm" linkActive />
    </header>
    <main className="container flex-auto">
      <div className="basic-grid mt-16">
        <div
          className={classNames(
            'col-span-4 flex flex-col',
            'md:col-span-4 md:col-start-3',
            'lg:col-span-6 lg:col-start-4'
          )}
        >
          {children}
        </div>
      </div>
    </main>
    <footer />
  </div>
)
