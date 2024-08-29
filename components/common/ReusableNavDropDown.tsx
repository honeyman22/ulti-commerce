"use client";
import { NavBarProps } from "@/utils/dtos/reusabledto";
import { Menu } from "@mantine/core";
import React from "react";
import { FaAngleDown, FaUserCircle } from "react-icons/fa";

const ReusableNavDropDown = ({ item }: { item: NavBarProps }) => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <button
          aria-label="Profile"
          className="flex  font-medium text-white items-center gap-2"
        >
          {item.icon}
          {item.title}
          <FaAngleDown fill="#ffffff" />
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

export default ReusableNavDropDown;
