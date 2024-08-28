import { Menu } from "@mantine/core";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartDropDown = () => {
  return (
    <Menu shadow="md" width={`80%`}>
      <Menu.Target>
        <button className="notification-button">
          <FaShoppingCart size={28} fill="#969696" />
        </button>
      </Menu.Target>
      <Menu.Dropdown></Menu.Dropdown>
    </Menu>
  );
};

export default CartDropDown;
