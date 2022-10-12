import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='flex flex-col min-h-screen container flex-grow max-w-screen-lg m-auto px-5 md:px-12 lg:px-24'>{children}</main>
      <Footer />
    </>
  )
}