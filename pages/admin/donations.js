import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import ProductPerfomance from "../../components/dashboard/ProductPerfomance";
import FullLayout from "../../components/layouts/FullLayout";
import TableFilter from "../../components/dashboard/TableFilter";
import Card from "../../components/Card";
import { useLoginProvider } from "../../context/LoginProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { onGetDonations, onGetDonationsSummary } from "../../src/utils/queries";
import moment from "moment";

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await api.get('/donations')
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }
//create useEffect to handle authentication on route change
export default function Donations({ props }) {
  const { token } = useLoginProvider();
  moment.updateLocale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
  });

  const router = useRouter();
  const [calledData, setCalledData] = useState([]);
  const [summaryCalledData, setSummaryCalledData] = useState({});

  const { isLoading, isSuccess, error, isError, data } = onGetDonations(token);

  const {
    isLoading: summaryLoading,
    isSuccess: summarySuccess,
    error: summaryError,
    isError: summaryCheckError,
    data: summaryData,
  } = onGetDonationsSummary(token);

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      console.log(data.data.data.data);
      setCalledData(data.data.data.data);
    }
    if (isError) {
      console.log(error.response, error);
    }
    //put the dependencies in later
  }, [isSuccess, isError]);

  useEffect(() => {
    if (summarySuccess) {
      console.log(summaryData.data.data);
      const summarisedData = summaryData.data.data;
      setSummaryCalledData(summarisedData);
    }
    if (summaryCheckError) {
      console.log(summaryError.response);
    }
    //put the dependencies in later
  }, [summarySuccess, summaryError]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        // id:'donor',
        Header: "DONOR",
        accessor: "donor.first_name",
        Cell: ({ cell }) => {
          return `${cell.row.original.donor.first_name} ${cell.row.original.donor.last_name}`;
        },
      },
      {
        Header: "DATE & TIME",
        accessor: "created_at",
        Cell: ({ value }) => moment(value).format("DD MMM YYYY"),
        filter: (rows, columnId, filterValue) => {
          return rows.filter((row) => {
            const minDate = filterValue[0];
            const maxDate = filterValue[1];
            console.log(minDate, maxDate);
            const referenceDate = row.original.created_at;
            // console.log(filterValue)
            // console.log(row.original)
            if (
              moment(referenceDate).isSameOrAfter(minDate) &&
              moment(referenceDate).isSameOrBefore(maxDate)
            )
              return row;
          });
        },
      },
      {
        Header: "TYPE",
        accessor: "donation_details[0].donation_type.type",
        filter: (rows, columnId, filterValue, preFilteredRows) => {
          return rows.filter((row) => {
            if (filterValue.length === 0) return row;
            if (
              filterValue.includes(
                row.values["donation_details[0].donation_type.type"]
              )
            )
              return row;
          });
        },
      },
      {
        Header: "GIFT AID",
        accessor: "apply_gift_aid_to_donation",
        Cell: ({ value }) => value === true && "eligible",
        filter: (rows, columnId, filterValue) => {
          return rows.filter((row) => {
            if (row.values.apply_gift_aid_to_donation === filterValue)
              return row;
            else if (filterValue === "any") return row;
          });
        },
      },
      {
        Header: "CHANNEL",
        accessor: "channel",
        Cell: ({ value }) =>
          value === "mobile" ? (
            <i class="las la-mobile la-lg"></i>
          ) : (
            <i class="las la-laptop-medical la-lg"></i>
          ),
          filter: (rows, columnId, filterValue) => {
            return rows.filter((row) => {
              if (row.values.channel === filterValue)
                return row;
              else if (filterValue === "any") return row;
            });
          },
      },
      {
        Header: "AMOUNT",
        accessor: "donation_details[0].amount",
        filter: (rows, columnId, filterValue) => {
          return rows.filter((row) => {
            const min = filterValue[0]
            const max = filterValue[1]
            const reference = row.values["donation_details[0].amount"]
            if((reference >= min) && (reference <= max))return row
          });
        },
      },
    ],
    []
  );

  const rows = useMemo(() => calledData, [calledData]);

  const cards = [
    {
      header: "TOTAL DONATION AMOUNT",
      currency: "$",
      body: summaryCalledData?.total_donation_amount,
    },
    {
      header: "NO. OF DONATIONS",
      body: summaryCalledData?.number_of_donations,
    },
    {
      header: "AVG. DONATION AMOUNT",
      currency: "$",
      body: summaryCalledData?.average_donation_amount,
    },
    {
      header: "UNIQUE DONORS",
      body: summaryCalledData?.unique_donations,
    },
  ];

  return (
    <>
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        mb="2em"
      >
        <Typography variant="h4" component={"h2"}>
          Donations
        </Typography>
        <Button
          sx={{
            borderRadius: "8px",
            paddingY: "8px",
            paddingX: "12px",
            fontSize: "14px",
            fontWeight: "600",
            textTransform: "none",
            "&.Mui-disabled": {
              opacity: "0.3",
              backgroundColor: "primary.main",
              color: "white",
            },
          }}
          variant="contained"
          color="primary"
          disableElevation
          disableFocusRipple
          disableRipple
        >
          Add donation type
        </Button>
      </Box>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}></Grid>
        {cards.map(({ header, body, currency }, index) => (
          <Grid item xs={12} md={3} lg={3}>
            <Card Header={header} body={body} currency={currency} />
          </Grid>
        ))}

        <Grid item xs={12} lg={11} mt="2.5em">
          <ProductPerfomance
            columns={columns}
            data={rows}
            header={TableFilter}
          />
        </Grid>
      </Grid>
    </>
  );
}

Donations.PageLayout = FullLayout;
