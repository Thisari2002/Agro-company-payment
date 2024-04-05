import { BrowserRouter,Routes,Route } from "react-router-dom"
import Payment from "./pages/Payment"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/payment" element={<Payment    />}  />
      </Routes>
    </BrowserRouter>
  )
}
