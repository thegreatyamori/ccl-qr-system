import React from "react";
import QRCode from "qrcode.react";
import Paper from "@material-ui/core/Paper";
import VirtualizedTable from "./VirtualizedTable";
import { header } from "../shared/settings";

export default function ReactVirtualizedTable({ data }) {
  const qr_data = data.map((item) => {
    const encodedText = `${item.id},${item.nombres},${item.edad},${item.culto},${item.dia},${item.hora}`;

    return {
      ...item,
      codigo: (
        <QRCode
          value={encodedText}
          // renderAs={"svg"}
          // imageSettings={{
          //   src: "https://static.zpao.com/favicon.png",
          //   height: 20,
          //   width: 20,
          //   excavate: true,
          // }}
        />
      ),
    };
  });

  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <VirtualizedTable
        rowHeight={135}
        rowCount={data.length}
        rowGetter={({ index }) => qr_data[index]}
        columns={header}
      />
    </Paper>
  );
}