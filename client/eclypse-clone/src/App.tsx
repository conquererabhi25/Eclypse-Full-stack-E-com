// App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Cart from "./components/Cart";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  )
}

export default App