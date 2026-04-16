import "./App.css";
import Header from "./components/Header";
import Projetos from "./components/Projetos";

function App() {
  return (
    <div>

      <Header />

      <section id="sobre">
        <h2>Sobre mim</h2>
        <img src="/perfil.jpeg" className="foto-perfil" />
        <p>Sou estudante de desenvolvimento web e estou aprendendo HTML, CSS e JavaScript.</p>
      </section>
      <Projetos />

      <footer>
        <p>© 2026 - Danilo Paulo</p>
      </footer>
    </div>
  );
}

export default App;