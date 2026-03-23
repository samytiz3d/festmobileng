import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

// ── Add new pages here as you build them ──────────────────────────────────────
// import About    from './pages/About.jsx'
// import Products from './pages/Products.jsx'
// import GetHelp  from './pages/GetHelp.jsx'
// import Contact  from './pages/Contact.jsx'
// import Careers  from './pages/Careers.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"    element={<Home />} />
          {/* <Route path="/about"              element={<About />} /> */}
          {/* <Route path="/products-services"  element={<Products />} /> */}
          {/* <Route path="/get-help"           element={<GetHelp />} /> */}
          {/* <Route path="/contact"            element={<Contact />} /> */}
          {/* <Route path="/careers"            element={<Careers />} /> */}
          <Route path="*"    element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
