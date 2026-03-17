import Navbar from "./components/Navbar";
import Repositories from "./components/Repositories";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Courses from "./components/Courses";
import Skills from "./components/Skills";
import Background3D from "./components/Background3D";
import Experiencias from "./components/Experiences";
import Contato from "./components/Contact";

function App() {
  return (
    <div className="bg-light min-vh-100">
      <div className="container py-5">
        <Background3D />
        <Navbar />
        <Profile />
        <Experiencias />
        <Skills />
        <Courses />
        <div className="jumbotron bg-white p-5 rounded shadow-sm mt-5">
          <Repositories />
        </div>
        <Contato />
        <Footer />
      </div>
    </div>
  );
}

export default App;
