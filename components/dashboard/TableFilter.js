import { CompressOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import DateSetter from "../DatePicker";
import moment from "moment";
import CustomSelect from "./CustomSelect";

const TableFilter = ({ setGlobalFilter, setFilter, rows, filterValue, state, prefilteredRows }) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      {/* <input
          onChange={e => {
            setFilter('age', e.target.value);
          }}
          placeholder="Filter outside table"
        /> */}
      <CustomSelect setFilter={setFilter}/>
      
    </div>
  );
};

export default TableFilter;
