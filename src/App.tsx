import { Routes, Route } from "react-router-dom";
import CardDog from "./components/dog/CardDogView";
import Profile from "./components/dog/Profile";
import Button from "./components/utils/Button";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Button
              text="Go to Card"
              href="/card"
              className="bg-blue-500 text-white rounded hover:bg-blue-600 w-full py-3 mt-3"
              onClick={() => {}}
            />
          }
        />
        <Route path="/card" element={<CardDog />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
