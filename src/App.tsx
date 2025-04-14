import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PublicLayout from "@/layout/public-layout"
import HomePage from "@/routes/home"
import AuthenticationLayout from "./layout/auth-layout"
import { SignInPage } from "./routes/sign-in"
import { SignUpPage } from "./routes/sign-up"
function App() {
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
      </Routes>
    </Router>
  )
}

export default App
