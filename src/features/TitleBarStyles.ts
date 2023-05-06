import styled from 'styled-components';

export const TitleBarContainer = styled.div`
  -webkit-app-region: drag;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: #000000;
  padding: 0 10px;
`;

export const LeftSide = styled.div`
  -webkit-app-region: no-drag;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  color: #858585;
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: inherit;
  position: relative;
  padding: 2px 0;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const TitleBarControls = styled.div`
  -webkit-app-region: no-drag;
  display: flex;
  gap: 5px;
`;

export const ControlButton = styled.div`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: none;
  }
`;
