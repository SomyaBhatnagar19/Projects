/* src/App.js */
import Home from "./Home";
import BookingForm from "./BookingForm";
import UpdateForm from "./UpdateForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/BookingForm" element={<BookingForm />}></Route>
        <Route path="/UpdateForm/:id" element={<UpdateForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
