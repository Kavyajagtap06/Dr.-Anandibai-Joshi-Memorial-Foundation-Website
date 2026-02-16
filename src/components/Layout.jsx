import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from '../sections/Footer'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
