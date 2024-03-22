'use client'
import { useState, useRef } from "react";
import { Inter } from "next/font/google";
import DashboardNav from "@/components/Dashboard/DashboardNav/DashboardNav";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar/DashboardSidebar";
import "../globals.css";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [sideBar, setSideBar] = useState(false);
  const navbarRef = useRef();
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <div className="flex flex-col">
            <div  ref={navbarRef}  className="w-full">
                <DashboardNav sidebarHandler={() => setSideBar(!sideBar)} isOpen={sideBar} />
            </div>

            <div className={`flex h-[calc(100vh-64px)]`}> {/* substract navbar height */}
                <div className={`h-full  overflow-y-auto shrink-0 ${sideBar ? 'w-[50%]' : 'w-0'} md:w-auto transition-all duration-300`}>
                    <DashboardSidebar />
                </div>

                <div className="h-full w-full overflow-y-auto ">
                    {children}
                </div>
            </div>
        </div>
      </body>
    </html>
  );
}
