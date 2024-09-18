import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Blogs } from './pages/Blogs'
import { BlogsDetails } from './pages/BlogsDetails'
import { PlacesRoute } from './pages/PlacesRoute'
import { Nopage } from './pages/Nopage'
function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blogs/:id' element={<BlogsDetails/>}/>
          <Route path='/places' element={<PlacesRoute/>}/>
          <Route path='*' element={<Nopage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
