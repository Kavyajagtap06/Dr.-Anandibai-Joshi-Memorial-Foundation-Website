import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from '../sections/Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="pt-30"> {/* Increased padding to account for header + navbar */}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
