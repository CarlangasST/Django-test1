import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import EAssist from "containers/pages/EAssist";
import Contacto from "containers/pages/Contacto";
import Nosotros from "containers/pages/Nosotros";
import Registro from "containers/pages/Registro";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="*" element={<Error404 />}></Route>

        <Route path="/" element={<Home/>} />
        <Route path="/eassist" element={<EAssist/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/registro" element={<Registro/>} />

      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
