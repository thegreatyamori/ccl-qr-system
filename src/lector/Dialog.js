import React from "react";
import QrReader from "react-qr-reader";
import PropTypes from "prop-types";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

export default function SimpleDialog({ open, onClose, onCapture }) {
  const handleClose = () => onClose(false);
  const handleError = (err) => console.error(err);
  const handleScan = (data) => {
    if (data) {
      onCapture(data);
      handleClose();
    }
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Escanea el QR</DialogTitle>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: 250 }}
      />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCapture: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
