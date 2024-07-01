import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  width: 85px;
  overflow: hidden;
`;

export const HeaderLogoImage = styled.img`
  width: 100%;
  height: auto;
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonHover01 = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  &.a {
    color: #FFFFFF;
  }
`;

export const ButtonMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  a {
    color: #ffffff;
    text-decoration: none;
  }

  &:hover {
    background-color: #33399b;
  }
`;

export const UserLink = styled.a`
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  cursor: pointer;

  &:hover {
    color: #33399b;
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin-left: 5px;
  }

  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const UserSettings = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #ffffff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const UserName = styled.p`
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const UserEmail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const LogoutButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565eef;
  border-radius: 4px;
  border: 1px solid #565eef;

  a {
    color: #565eef;
    text-decoration: none;
  }

  &:hover {
    background-color: #33399b;
    color: #ffffff;

    a {
      color: #ffffff;
    }
  }
`;