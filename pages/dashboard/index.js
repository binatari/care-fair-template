import { Grid } from "@mui/material";
import ProductPerfomance from "../../components/dashboard/ProductPerfomance";
import FullLayout from "../../components/layouts/FullLayout";
export default function Index() {
  return (
    <Grid container spacing={0}>
      {/* <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid> */}
      {/* ------------------------- row 1 ------------------------- */}
      {/* <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid> */}
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
    </Grid>
  );
}

Index.PageLayout = FullLayout
