import { ReactNode } from 'react';

import TitleBar from '@/features/TitleBar';

interface LayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="h-screen flex flex-col">
      <TitleBar />
      {/* 3 column wrapper */}
      <div className="flex-grow flex">
        {/* Main content */}
        <div className="flex-grow flex">
          <div className=" flex-1 flex items-center justify-center">
            {/* Main area */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
