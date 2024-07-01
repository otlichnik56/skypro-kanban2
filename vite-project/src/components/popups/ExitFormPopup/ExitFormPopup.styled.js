import styled from 'styled-components';

export const PopupContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupBlock = styled.div`
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  text-align: center;
`;

export const PopupTitle = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`;

export const Button = styled.button`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  cursor: pointer;

  &._hover01:hover {
    background-color: #33399b;
  }

  &._hover03:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  &._hover03:hover a {
    color: #ffffff;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
  }
`;

export const YesButton = styled(Button)`
  background-color: #565eef;
  color: #ffffff;
  margin-right: 10px;

  @media only screen and (max-width: 375px) {
    margin-right: 0;
  }
`;

export const NoButton = styled(Button)`
  background-color: transparent;
  border: 0.7px solid #565eef;
  color: #565eef;
`;