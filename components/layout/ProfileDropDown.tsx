import { Menu } from "@mantine/core";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ProfileDropDown = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <button className="notification-button">
          <FaUserCircle size={28} fill="#969696" />
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<FaUserCircle size={28} fill="#969696" />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<FaUserCircle size={28} fill="#969696" />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<FaUserCircle size={28} fill="#969696" />}>
          Gallery
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileDropDown;
