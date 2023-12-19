import './globals.css'
import { Navbar, Footer } from '../index'


export const metadata = {
  title: 'Cars hub',
  description: 'Discover the Best Cars in the world withi our Platform! ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
