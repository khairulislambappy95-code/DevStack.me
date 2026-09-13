import { Nav } from './components/nav'
import { Hero } from './components/hero'
import { Body } from './components/body'
import {Footer} from './components/footer'
import type {Itechnology} from './types'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

const TechlonogyFetch = async ():Promise<Itechnology[]> => {
    const res = await fetch('/data.json')
    const data = await res.json()
    return data};
    const TechlonogyPromise = TechlonogyFetch()

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Body TechlonogyStack={TechlonogyPromise} />
      <ToastContainer position="bottom-right" autoClose={2000} />
      <Footer />
    </>
  )
}

export default App
