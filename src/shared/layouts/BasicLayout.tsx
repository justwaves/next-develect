import { Header } from '@/shared/components/Header'

interface BasicLayoutProps {
  children?: React.ReactNode
}

export const BasicLayout = ({ children }: BasicLayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="container flex-auto">{children}</main>
    <footer />
  </div>
)
