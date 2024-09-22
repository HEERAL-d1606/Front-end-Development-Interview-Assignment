import React, { useState } from "react";
import { Box, Select, MenuItem } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Search } from "../style/CustomizedInputsStyled";
import { SearchIconWrapper } from "../style/CustomizedInputsStyled";
import { StyledInputBase } from "../style/CustomizedInputsStyled";

/**
 This code inclued the SEARCHBAR and TOPICS .
 */

const SearchAndFilter = ({ onSearch, onFilter, topics }) => {
  const [search, setSearch] = useState("");
  const [selectedTopics, setSelectedTopics] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleTopicsChange = (e) => {
    const value = e.target.value;
    setSelectedTopics(value);
    onFilter(value === "" ? null : value); // Call onFilter with null or a specific value for all
  };

  return (
    <Box
      display="flex"
      justifyContent={{ xs: "center", sm: "space-between" }}
      alignItems="center"
      flexDirection={{ xs: "column", sm: "row" }}
      flexWrap="wrap"
      pl={5}
      pr={5}
      pt={5}
      pb={2}
    >
      {/* Search Field */}
      <Box mb={{ xs: 2, sm: 0 }} mr={{ sm: 2 }}>
        <Search>
          <SearchIconWrapper>
            <SearchOutlinedIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for Webinar"
            value={search}
            onChange={handleSearchChange}
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>

      {/* Topic Dropdown */}
      <Select
        value={selectedTopics}
        onChange={handleTopicsChange}
        displayEmpty
        renderValue={(selected) => {
          return selected ? selected : "Topics";
        }}
        sx={{
          width: { xs: "100%", sm: "220px" },
          height: "41px",
          backgroundColor: "#FFFFFF",

          borderRadius: "10px",
          "& .MuiSelect-select": {
            padding: "10px 14px",
            color: "#2E333B",
          },
          "& .MuiMenuItem-root": {
            fontSize: "18px",
            color: "#2E333B",
          },
          "&:before, &:after": {
            borderColor: "#E3E7EC",
          },
        }}
      >
        <MenuItem value="">All</MenuItem>
        {topics.map((topics, index) => (
          <MenuItem key={index} value={topics}>
            {topics}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SearchAndFilter;
