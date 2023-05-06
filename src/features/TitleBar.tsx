import {
  XMarkIcon,
  WindowIcon,
  MinusIcon,
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

import {
  TitleBarContainer,
  LeftSide,
  Nav,
  NavItem,
  TitleBarControls,
  ControlButton,
} from './TitleBarStyles';

const { ipcRenderer } = window.require('electron');

export default function TitleBar() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleForward = () => {
    navigate(1);
  };

  const minimizeWindow = () => {
    ipcRenderer.send('minimize-window');
  };

  const maximizeWindow = () => {
    ipcRenderer.send('maximize-window');
  };

  const closeWindow = () => {
    ipcRenderer.send('close-window');
  };

  return (
    <TitleBarContainer>
      {/* Left */}
      <LeftSide>
        <Nav>
          {/* <NavItem href="/">Files</NavItem> */}
          <ControlButton>
            <Bars3Icon className="h-6 w-auto text-gray-500" />
          </ControlButton>
          <ControlButton onClick={handleBack} className="cursor-pointer">
            <ChevronLeftIcon className="h-6 w-auto text-gray-500" />
          </ControlButton>
          <ControlButton onClick={handleForward} className="cursor-pointer">
            <ChevronRightIcon className="h-6 w-auto text-gray-500" />
          </ControlButton>
        </Nav>
      </LeftSide>

      {/* Middle */}
      <span className="title mr-4 text-lg text-white font-bold select-none">Boomslag</span>

      {/* Right */}
      <TitleBarControls>
        <ControlButton onClick={minimizeWindow}>
          <MinusIcon className="h-5 w-auto text-gray-500 hover:text-gray-300" />
        </ControlButton>
        <ControlButton onClick={maximizeWindow}>
          <WindowIcon className="h-5 w-auto text-gray-500 hover:text-gray-300" />
        </ControlButton>
        <ControlButton onClick={closeWindow}>
          <XMarkIcon className="h-5 w-auto text-gray-500 hover:text-gray-300" />
        </ControlButton>
      </TitleBarControls>
    </TitleBarContainer>
  );
}
