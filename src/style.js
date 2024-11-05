import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;
export const Main = styled.main`
  background-image: linear-gradient(135deg, #ff9a8b, #ff6a88, #ff99ac);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalculatorBox = styled.div`
  background-color: #ffffff;
  border: 2px solid #333333;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const H1 = styled.h1`
  color: #212121;
  padding: 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 15vw;
  border: 1px solid #42a5f5;
  border-radius: 20px;
  padding: 10px;
  text-align: center;

  &::placeholder {
    color: #42a5f5;
  }
`;

export const Resultado = styled.div`
  font-size: 1.2rem;
  color: #212121;
  padding: 10px;
  background-color: #e3f2fd;
  border-radius: 20px;
  min-width: 100px;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const Btn = styled.button`
  border: none;
  padding: 10px 15px;
  color: #ffffff;
  background-color: #42a5f5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #26c6da;
  }
`;
