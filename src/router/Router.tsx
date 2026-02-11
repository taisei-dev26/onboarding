import { Route, Routes } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Users } from "../components/pages/Users"
import DefaultLayout from "../components/templates/DefaultLayout"
import HeaderOnly from "../components/templates/HeaderOnly"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout><Top /></DefaultLayout>} />
      <Route path="/users" element={<HeaderOnly><Users /></HeaderOnly>} />
    </Routes>
  )
}

export default Router