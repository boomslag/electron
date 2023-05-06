import { ReactNode } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  ArrowDownIcon,
  ChevronDownIcon,
  HomeIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  UserIcon,
} from '@heroicons/react/24/outline';

import TitleBar from '@/features/TitleBar';
import psIcon from '@/assets/playstation-logotype-white.png';
import xboxIcon from '@/assets/xbox-logo-white.png';
import steamIcon from '@/assets/steamWhite.png';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  const items = [
    {
      id: 1,
      title: 'Home',
      icon: HomeIcon,
      path: '/',
    },
    {
      id: 2,
      title: 'Browse',
      icon: Squares2X2Icon,
      path: '/browse',
    },
    {
      id: 3,
      title: 'Library',
      icon: RectangleStackIcon,
      path: '/library',
    },
    // More items...
  ];

  return (
    <div className="h-screen flex flex-col">
      <TitleBar />
      {/* 3 column wrapper */}
      <div className="flex-grow flex">
        {/* Left sidebar */}
        <div className="h-full w-20 lg:w-64 md:border-r  border-gray-900 flex flex-col justify-between">
          {/* Left column area */}
          <ul className="space-y-3 mt-2">
            {items.map((item) => (
              <li
                key={item.id}
                className={`overflow-hidden cursor-pointer px-6 py-4 ${
                  currentPath === item.path
                    ? 'bg-gray-500 bg-opacity-50'
                    : 'hover:bg-gray-500 hover:bg-opacity-25'
                }`}
              >
                <Link to={item.path}>
                  <div className="flex items-center text-white">
                    <item.icon className="h-8 lg:h-6 w-auto mr-0 lg:mr-6" />
                    <span className="hidden lg:inline">{item.title}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className=" px-6 hover:bg-gray-500 cursor-pointer hover:bg-opacity-25  py-6">
            <div className="flex items-center text-white">
              <ArrowDownIcon className="h-8 lg:h-6 w-auto mr-0 lg:mr-6" />
              <span className="hidden lg:inline">Download Manager</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-grow flex">
          <div className="px-4 py-6 sm:px-6 bg-gray-800 bg-opacity-10 lg:pl-8 flex-1 xl:pl-6">
            {/* Main area */}
            {children}
          </div>

          {/* Right sidebar */}
          <div className="h-full w-20 lg:w-64 md:border-l  border-gray-900 flex flex-col justify-between">
            {/* Right column area */}
            <div className="overflow-hidden hover:bg-gray-500 mt-2 cursor-pointer hover:bg-opacity-25 px-6 py-4">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center">
                  <UserIcon className="h-8 lg:h-6 w-auto mr-0 lg:mr-6" />
                  <span className="hidden lg:inline">xAcm5pts</span>
                </div>
                <ChevronDownIcon className="h-8 lg:h-6 w-auto mr-0 " />
              </div>
            </div>
            <div className="bg-gray-700 bg-opacity-5 rounded-t-lg m-2 mb-4 ">
              <div className=" flex items-center lg:px-6 px-0 lg:justify-start justify-center py-4 text-white hover:bg-gray-500 cursor-pointer hover:bg-opacity-25">
                <img
                  src={psIcon}
                  alt="PS"
                  className="h-8 lg:h-6 w-auto mr-0 lg:mr-6 object-cover"
                />
                <span className="hidden lg:inline text-md">PlayStation</span>
              </div>
              <div className=" flex items-center lg:px-6 px-0 lg:justify-start justify-center py-4 text-gray-300 hover:bg-gray-500 cursor-pointer hover:bg-opacity-25">
                <img
                  src={steamIcon}
                  alt="Steam"
                  className="h-8 lg:h-6 w-auto mr-0 lg:mr-6 object-cover"
                />
                <span className="hidden lg:inline text-md">Steam</span>
              </div>
              <div className=" flex items-center lg:px-6 px-0 lg:justify-start justify-center py-4 text-gray-500 hover:bg-gray-500 cursor-pointer hover:bg-opacity-25">
                <img
                  src={xboxIcon}
                  alt="XBOX"
                  className="h-8 lg:h-6 w-auto mr-0 lg:mr-6 object-cover"
                />
                <span className="hidden lg:inline text-md">Xbox</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
