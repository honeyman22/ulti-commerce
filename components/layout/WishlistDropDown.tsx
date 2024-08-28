import { Menu } from "@mantine/core";
import React from "react";
import { FaHeart } from "react-icons/fa";

const WishlistDropDown = () => {
  return (
    <Menu shadow="md" width={`80%`}>
      <Menu.Target>
        <button className="notification-button">
          <FaHeart size={28} fill="#969696" />
        </button>
      </Menu.Target>
          <Menu.Dropdown>
              
      </Menu.Dropdown>
    </Menu>
  );
};

export default WishlistDropDown;
