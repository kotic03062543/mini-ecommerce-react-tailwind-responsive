import { Routes, Route } from "react-router-dom";
import CardDog from "./components/dog/CardDogView";
import Profile from "./components/dog/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/card" element={<CardDog />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
