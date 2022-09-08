import React from "react";
import { ICard } from "interfaces/card.interface";

import * as S from "./styles";

const Card = ({ dados }: ICard) => {
  return (
    <S.Card>
      {dados && (
        <div key={dados.id}>
          <h4>
            <>
              {dados.nome} - {dados.data}
            </>
          </h4>
          <h3>Animes: {dados.nome}</h3>
          <h3>Data de Lançamento: {dados.data}</h3>
          <h3>Autor: {dados.autor}</h3>
        </div>
      )}
    </S.Card>
  );
};

export default Card;
