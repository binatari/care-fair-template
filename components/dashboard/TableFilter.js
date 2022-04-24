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
import TypeFilter from "./TypeFilter";
import AidFilter from "./AidFilter";
import ChannelFilter from "./ChannelFilter";
import AmountFilter from "./AmountFilter";

const TableFilter = ({ setGlobalFilter, setFilter, rows, filterValue, state, preFilteredRows }) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      {/* <input
          onChange={e => {
            setFilter('age', e.target.value);
          }}
          placeholder="Filter outside table"
        /> */}
      <CustomSelect setFilter={setFilter}/>
      <TypeFilter setFilter={setFilter} preFilteredRows={preFilteredRows}/>
      <AidFilter setFilter={setFilter} preFilteredRows={preFilteredRows}/>
      <ChannelFilter setFilter={setFilter} preFilteredRows={preFilteredRows}/>
      <AmountFilter setFilter={setFilter} preFilteredRows={preFilteredRows}/>
    </div>
  );
};

export default TableFilter;
