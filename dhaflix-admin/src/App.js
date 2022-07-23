import { Route, Routes } from "react-router-dom"
import Dasboard from "./views/Dasboard"
import Login from "./views/LoginForm"
import AddMovie from "./components/FormAddMovie"
import EditMovie from "./components/FormEditMovie"
import Genres from "./views/Genre"
import AddGenre from "./components/FormAddGenre"
import EditGenre from "./components/FormEditGenre"
import Register from "./views/RegisterForm"
import Cast from "./views/Cast"
import { AdminOnly } from "./views/AdminProtect"
import { Protected } from "./components/Protected"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Protected>
            <AdminOnly />
          </Protected>
        }>
          <Route index={true} element={<Dasboard />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/addgenre" element={<AddGenre />} />
          <Route path="/editgenre/:id" element={<EditGenre />} />
          <Route path="/casts" element={<Cast />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/editmovie/:id" element={<EditMovie />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
