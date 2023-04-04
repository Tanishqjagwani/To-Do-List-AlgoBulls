import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./Navbar";
import { Avatar, Typography, List, Grid, ListItem } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsIcon from "@mui/icons-material/Settings";
import { PlayArrow } from "@mui/icons-material";
import { v4 as uuid } from "uuid";

const list = [
  {
    id: uuid(),
    title: "Content Writeups",
  },
  {
    id: uuid(),
    title: "Study Plan",
  },
  {
    id: uuid(),
    title: "Job Applications Tracker",
  },
  {
    id: uuid(),
    title: "Coursework",
  },
  {
    id: uuid(),
    title: "My Todo-List",
  },
  {
    id: uuid(),
    title: "College Notes",
  },
  {
    id: uuid(),
    title: "Random Stuff",
  },
];
const menu = [
  {
    id: 21,
    title: "Quick Find",
    icon: <SearchIcon fontSize="small" />,
  },
  {
    id: 32,
    title: "All Updates",
    icon: <AccessTimeIcon fontSize="small" />,
  },
  {
    id: 34,
    title: "Settings",
    icon: <SettingsIcon fontSize="small" />,
  },
];

function Sidebar({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#F7F6F3",
        pt: 2,
        pl: 2,
        color: "#000",
        width: "17%",
      }}
    >
      <CssBaseline />
      <Box sx={{}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            m: 0,
            width: "100%",
          }}
        >
          <Avatar
            alt="To-Do-LIST"
            sx={{ width: 30, height: 30 }}
            src="data:image/png;base64,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"
          />

          <Box
            sx={{
              m: 1,
              display: "flex",
              flexDirection: "row",
              width: "130px",
            }}
          >
            <Typography sx={{ fontSize: "15px", fontWeight: "bold", mt: -0.4 }}>
              To-DO-LIST
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                mt: "-5px",
                ml: "5px",
              }}
            >
              <KeyboardArrowUpIcon fontSize="small" sx={{ mb: "-12px" }} />
              <KeyboardArrowDownIcon fontSize="small" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            color: "#757370",
            display: "flex",
            mt: 2,
            flexDirection: "column",
          }}
        >
          {menu.map((obj) => (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Grid
                item
                key={obj.id}
                variant="text"
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "row",
                  mb: 0.5,
                  color: "#757370",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: "15px",
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "#000",
                  },
                }}
              >
                <div style={{ marginTop: -2, marginRight: 4 }}>{obj.icon}</div>
                {obj.title}
              </Grid>
            </div>
          ))}
        </Box>
        <List>
          {list.map((item) => (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ListItem
                sx={{
                  color: "#757370",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  width: "250px",
                  flexWrap: "space-between",
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "#ddd",
                    color: "#000",
                  },
                }}
                key={item.id}
              >
                <PlayArrow sx={{ mr: 1, ml: -2 }} fontSize="small" />
                {item.title}
              </ListItem>
            </div>
          ))}
        </List>
      </Box>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
}
export default Sidebar;
