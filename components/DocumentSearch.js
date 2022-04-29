import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import CustomModal from "./CustomModal";

const DocumentSearch = ({ document }) => {
  const documentArr = [
    {
      document: document?.background_document_path,
      name: "Background check",
      icon: "las la-briefcase la-lg",
      color: "green",
    },
    {
      document: document?.ccna_document_url,
      name: "CCNA",
      icon: "las la-child la-lg",
      color: "blue",
    },
    {
      document: document?.covid_document_url,
      name: "Covid documentation",
      icon: "las la-file-alt la-lg",
      color: "yellow",
    },
    {
      document: document?.cpr_document_url,
      name: "CPR certification",
      icon: "las la-first-aid la-lg",
      color: "orange",
    },
    {
      document: document?.vehicle_document_url,
      icon: "las la-car-side la-lg",
      name: "Vehicle check",
      color: "red",
    },
  ];

//   console.log(document)
  return (
    <>
      {document &&
        documentArr.map((item) => (
          <ListItem
            dense
            sx={{
              border: "1px solid #DFE0EB",
              borderRadius: "8px",
              py: "1.5em",
              px: "1.25em",
              mt: "0.65em",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <i class={item.icon} style={{color:item.color, marginRight:'0.5em'}}></i>
              <Box>
                <Typography fontWeight={600}>{item.name}</Typography>
                <Typography fontSize="12px">
                  {item.document ? "Doc uploaded" : "No Doc uploaded"}
                </Typography>
              </Box>
            </Box>
            <Box>
              <CustomModal text={'Verify'} closeIcon component={item.document && <img src={item.document}/>} disabled={item.document === null}/>
            </Box>
          </ListItem>
        ))}
    </>
  );
};

export default DocumentSearch;
