import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEcontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />}/>
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
