import React from 'react';
import { Button } from "semantic-ui-react";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Container, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

function AlertDone({ history }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/eventcompletedroutedashboard");
  };

  return (
    <div>
      <Container text className="container login">
        <Button
          onClick={handleClickOpen}
          className="btnAceptar"
          size="huge"
          inverted
        >
          FINALIZAR RUTA
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Finalización de Ruta"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Etas seguro que quieres finalizar la hoja de ruta?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}
          style={{
            backgroundColor: "#bdbdbd"
          }} autoFocus>
            NO
          </Button>
          <Button onClick={() => history.push("/")}
          style={{
            backgroundColor: "#DD0021",
            color: "white"
          }} autoFocus>
            CERRAR SESION
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withRouter(AlertDone);
