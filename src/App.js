import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./Pages/Home";
import { Legal } from "./Pages/Legal";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={styles.App}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Legal" element={<Legal />} />
      </Routes>
      <Footer />
    </div>
  );
}

const styles = {
  App: {
    overflow: "hidden",
    position: "relative",
  },
};

export default App;
