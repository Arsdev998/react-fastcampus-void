import React from "react";
import { Button } from "../ui/button";
import { IoCart, IoPerson, IoPricetag } from "react-icons/io5";

const SidebarItem = (props) => {
  const { children } = props;
  return (
    <Button
      variant="ghost"
      size="lg"
      className="w-full rounded-none justify-start"
    >
      {children}
    </Button>
  );
};

const AdminLayout = (props) => {
  const { title, description , rightButton , children} = props;
  return (
    <div className="flex ">
      <aside className="w-72 border-r h-screen">
        <div className="h-16 flex flex-col items-center  justify-center border-b">
          <h1 className="font-semibold text-3xl">Admin Dashboard</h1>
        </div>
        <div className="flex flex-col items-center space-y-0 py-4">
          <SidebarItem>
            <IoPricetag className="h-6 w-6 mr-2" />
            Products Management
          </SidebarItem>
          <SidebarItem>
            <IoCart className="h-6 w-6 mr-2" />
            Order Management
          </SidebarItem>
        </div>
      </aside>
      <div className="flex-1">
        <header className="h-16 border-b flex w-full  justify-end items-center px-8">
          <Button className="rounded-full" size="icon">
            <IoPerson className="h-6 w-6" />
          </Button>
        </header>
        <main className="flex flex-col p-4">
          <div className="flex justify-between items-center pb-4 border-b mb-8">
            <div className="">
              <h1 className="font-bold text-4xl">{title}</h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            {rightButton}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
