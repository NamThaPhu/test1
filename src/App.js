import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoutes, restrictedRoutes, privateRoutes } from './routes'
import HeaderNone from './layouts/HeaderNone';
import Header from './layouts/Header'
import Footer from './layouts/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <HeaderNone />
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Element = route.element
              return (<Route key={index} path={route.path} element={<Element title={route.title} />} />)
            })
          }

          {restrictedRoutes.map((route, index) => {
            const Element = route.element
            return (<Route key={index} path={route.path} element={<Element title={route.title} />} />)
          })}

          {privateRoutes.map((route, index) => {
            const Element = route.element
            return (<Route key={index} path={route.path} element={<Element title={route.title} />} />)
          })}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter >
  )
}

export default App
