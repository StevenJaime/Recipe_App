import Home from './Pages/Home'
import Recipe from './Pages/Recipe'
import Recipes from './Pages/Recipes'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'


function App() {
 

  return (
    <div class="w-[80%] mx-auto">
      <Navbar/>
      <Routes>
        <Route path="/Recipe_App" element={<Home/>}></Route>
        <Route path="/Recipe_App/recipe" element={<Recipe/>}></Route>
        <Route path="/Recipe_App/recipes" element={<Recipes/>}></Route>
      </Routes>
    </div>
  )
}

export default App
