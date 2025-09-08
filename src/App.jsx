import Navbar from "./components/Navbar"
import Repositories from "./components/Repositories"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-light min-vh-100">
      <div className="container py-5">
        <Navbar />

        <div className="jumbotron bg-white p-5 rounded shadow-sm mt-5">
          <Repositories />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
