import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Home from '@/pages/Home'
// import Following from '@/pages/Following'
import {Fragment } from 'react'
import React  from 'react'
import {publicRoutes} from '@/routers'
import {DefaultLayout} from '@/components/Layout'

function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes>
          {/*<Route path="/" element={<Home />} />*/}
          {/*<Route path="following" element={<Following />} />*/}
          {
            publicRoutes.map((route, index)=>{
              // tạo biến Layout - nếu có tham số layout bên route thì chọn- 
              // còn ko thì mặc đinh Dedault Layout
              //const Layout = route.layout || DefaultLayout

              // Nếu layout == null thì dùng Fragement (trống) còn thì dùng Default
              //const Layout = route.layout === null ? Fragment : DefaultLayout

              let Layout = DefaultLayout
              if(route.layout){
                Layout = route.layout
              }else if(route.layout === null){
                Layout = Fragment
              }
              
              const Page = route.component
              return <Route key={index} path={route.path} 
                element={ 
                  <Layout>
                    <Page />
                  </Layout>
                } />
            })
          }
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
