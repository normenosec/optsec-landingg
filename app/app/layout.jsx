export const metadata = {
  title: 'OptiSec',
  description: 'Ciberseguridad para PYMEs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
