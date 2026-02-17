import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from '../sections/Footer'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* Add padding-top to push content below navbar */}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
