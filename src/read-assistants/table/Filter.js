import React, { useState } from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import {
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { cultos } from "../../shared/settings";

export default function Filter({ onSelect }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = ({ isFull, ...other }) => {
    onSelect({ ...other });
    handleClose();
  };

  return (
    <>
      <Tooltip title="Filtrar lista">
        <IconButton aria-label="Filtrar lista" onClick={handleClick}>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {cultos.map((item) => {
          return (
            item.culto !== "" && (
              <MenuItem
                button
                value={item.culto}
                key={item.culto}
                onClick={() => handleSelect(item)}
              >
                <span>
                  {item.dia}
                  {" - "}
                  <Typography variant="overline" display="inline">
                    {item.hora}
                  </Typography>
                </span>
              </MenuItem>
            )
          );
        })}
      </Menu>
    </>
  );
}
