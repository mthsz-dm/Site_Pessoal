import Navbar from "./components/Navbar"
import Repositories from "./components/Repositories"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import Courses from "./components/Courses"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="bg-light min-vh-100">
      <div className="container py-5">
        <Navbar />
        <Profile/>
        <Skills/>
        <Courses/>

        <div className="jumbotron bg-white p-5 rounded shadow-sm mt-5">
          <Repositories />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
