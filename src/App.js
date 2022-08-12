import Footer from "./pages/footer/footer";
import Header from "./pages/header/header";
import Home from "./pages/home/home";

import RoutesPath from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Header/>
      <RoutesPath/>
      <Footer/>
    </div>
  );
}

export default App;
