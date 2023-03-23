interface BasicLayoutProps {
  children?: React.ReactNode
}

export const BasicLayout = ({ children }: BasicLayoutProps) => (
  <div className="flex min-h-screen flex-col">
    <header />
    <main className="container flex-auto">{children}</main>
    <footer />
  </div>
)
