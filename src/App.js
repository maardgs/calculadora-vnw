import { useState } from "react";
import * as S from "./style";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  const limpar = () => {
    setPrimeiroValor();
    setSegundoValor();
    setResultado();
  };

  return (
    <S.Main>
      <S.GlobalStyle />
      <S.CalculatorBox>
        <S.H1>Calculadora</S.H1>
        <S.InputContainer>
          <S.Input
            type="number"
            placeholder="Valor"
            value={primeiroValor || ""}
            onChange={capturandoPrimeiroValor}
          />
          <S.Input
            type="number"
            placeholder="Valor"
            value={segundoValor || ""}
            onChange={capturandoSegundoValor}
          />
          <S.Resultado>{resultado}</S.Resultado>
        </S.InputContainer>
        <S.ButtonsContainer>
          <S.Btn onClick={soma}>+</S.Btn>
          <S.Btn onClick={subtracao}>-</S.Btn>
          <S.Btn onClick={multiplicacao}>x</S.Btn>
          <S.Btn onClick={divisao}>/</S.Btn>
          <S.Btn onClick={limpar}>C</S.Btn>
        </S.ButtonsContainer>
      </S.CalculatorBox>
    </S.Main>
  );
}
