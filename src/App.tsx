import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "@/routes/home"
import AuthenticationLayout from "./layout/auth-layout"
import { PublicLayout } from "./layout/public-layout"
import { SignInPage } from "./routes/sign-in"
import { SignUpPage } from "./routes/sign-up"
import ProtectedRoutes from "./layout/protected-routes"
import { MainLayout } from "@/layout/main-layout"
const App = () =>{
  return (
    <Router>
      <Routes>
        {/* {public Routes} */}
        <Route element={<PublicLayout/>} >
        <Route index element={<HomePage/>}/>
        </Route>

        {/* {authentication layout} */}
        <Route element={<AuthenticationLayout/>} >
        <Route path="/signin/*" element={<SignInPage/>}/>
        <Route path="/signup/*" element={<SignUpPage/>}/>
        </Route>

        {/*protected routes*/}
        <Route element={<ProtectedRoutes>
          <MainLayout/>
          </ProtectedRoutes>} >
{/* {add all the protected routes} */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
