import "./styles.css";
import Header from "./components/header";
import { NavBar } from "./components/navbar";
import Skills from "./components/skills";
import About from "./components/about";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
    </div>
  );
}
