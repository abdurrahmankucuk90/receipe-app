import "./App.css";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Container from "./pages/home/Home.styled";
// import GlobalStyle from "./router/Global.syled";

function App() {
  return (
    <BrowserRouter>      
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
