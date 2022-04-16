import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  useMediaQuery,
  List,
  Link,
  Button,
  Typography,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LogoIcon from "../../logo/LogoIcon";
import Menuitems from "./MenuItems";
import { useRouter } from "next/router";

const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
  const [open, setOpen] = React.useState(true);

  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handleClick = (index) => {
    if (open === index) {
      setOpen((prevopen) => !prevopen);
    } else {
      setOpen(index);
    }
  };
  let curl = useRouter();
  const location = curl.pathname;

  const SidebarContent = (
    <Box p={2} height="100%">
      {/* <LogoIcon /> */}
      <Box mt={2}>
        <List sx={{mb:'2.75em'}}>
          {Menuitems[0].content.map((item, index) => (
            <List component="li" disablePadding key={item.title}>
              <NextLink href={item.href}>
                <ListItem
                  onClick={() => handleClick(index)}
                  button
                  selected={location === item.href}
                  sx={{
                    // mb: 1,
                    ...(location === item.href && {
                      color: "primary.main",
                      backgroundColor: (theme) =>
                        `${theme.palette.grey.bg20}!important`,
                      borderLeft: (theme) =>
                        `2px solid ${theme.palette.primary.main}`,
                      borderRadius: "0px 8px 8px 0px",
                    }),
                  }}
                >
                  <ListItemIcon>
                    {/* <FeatherIcon
                      style={{
                        color: `${location === item.href ? "white" : ""} `,
                      }}
                      icon={item.icon}
                      width="20"
                      height="20"
                    /> */}
                    <i
                      class={item.icon}
                      style={{
                        color: `${location === item.href ? "blue" : ""}`,
                      }}
                    ></i>
                  </ListItemIcon>

                  <ListItemText
                    disableTypography
                    primary={
                      <Typography variant="big" sx={{ color: `${location === item.href ? "blue" : ""}`}}>
                       {item.title}
                      </Typography>
                    }
                    onClick={onSidebarClose}
                  >
                  </ListItemText>
                </ListItem>
              </NextLink>
            </List>
          ))}
        </List>
      </Box>
    </Box>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: "265px",
            border: "0 !important",
            pt: "64px",
            // boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
            background: "inherit",
          },
        }}
      >
        {SidebarContent}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      PaperProps={{
        sx: {
          width: "265px",
          border: "0 !important",
          flexShrink: 0,
        },
      }}
      variant="temporary"
    >
      {SidebarContent}
    </Drawer>
  );
};

Sidebar.propTypes = {
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
