import { NavbarItems } from "@/src/core/data/NavbarItems";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

type drawerbutton = {
  open: boolean;
  closeDrawer: () => void;
};

const NavbarDrawer: React.FC<drawerbutton> = ({ open, closeDrawer }) => {
  return (
    <Drawer open={open} onClose={closeDrawer} className="p-4 dark:bg-blue-gray-500">
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          Material Tailwind
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
          <XMarkIcon strokeWidth={2} className="h-5 w-5" />
        </IconButton>
      </div>
      <div className="flex flex-col justify-center items-start">
        {NavbarItems.map((items, index) => (
          <Link key={index} href={items.path} className="mx-2 my-4 md:mx-4">
            {items.title}
          </Link>
        ))}
      </div>
    </Drawer>
  );
};

export default NavbarDrawer;
