
import './App.css'
import DisplayBar from './components/DisplayBar'  
import Navbar from './components/Navbar'
import Home from './components/homepage/Home'
import Gifting from './components/gifting/Gifting'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Celebration from './components/celebration/Celebration'
import GiftingCard from './components/giftingcard/GiftingCard'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import store from './store/Store'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
function App() {
  
  return (
    <div className='bg-[#CBE3CC]'> 
      <BrowserRouter>
        <Provider store = {store}>
      <DisplayBar />
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gifting' element = {<Gifting/>} />
          <Route path='/celebration' element = {<Celebration/>} />
          <Route path='/card' element = {<GiftingCard />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/cart' element= {<Cart />} />
          </Routes>
          </Provider>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
