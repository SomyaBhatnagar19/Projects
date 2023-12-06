/* src/App.js */
import Home from "./Home";
import BookingForm from "./BookingForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/BookingForm" element={<BookingForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
