import { Box, Link } from "@chakra-ui/react";
import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box width={"150px"} height={"100vh"} background={"red"}>
      SideBar
      <OrderedList>
        <ListItem>
            <Link href="/">Home</Link></ListItem>
        <ListItem><Link href="/admin/profile">Profile</Link></ListItem>
        <ListItem><Link href="/admin/contact">Contact</Link></ListItem>
      </OrderedList>
    </Box>
  );
};

export default Sidebar;
