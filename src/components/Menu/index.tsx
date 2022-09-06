import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import logo from "assets/img/image2.png"

const Menu = () => {
  return (
    <S.Cabecalho>
      <picture>
        <Link to="/">
          <img src={logo}  />
        </Link>
      </picture>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
