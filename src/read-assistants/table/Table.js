import React from "react";
import Paper from "@material-ui/core/Paper";
import VirtualizedTable from "./VirtualizedTable";
import { header } from "../../shared/settings";

export default function ReactVirtualizedTable({ data }) {
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <VirtualizedTable
        rowHeight={135}
        rowCount={data.length}
        rowGetter={({ index }) => data[index]}
        columns={header}
      />
    </Paper>
  );
}
