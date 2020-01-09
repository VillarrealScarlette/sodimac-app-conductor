import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({ history }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    history.push("/routetime");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        OPEN
      </Button>
      <Container text className="container login">
        <Button
          onClick={{handleClickOpen}}
          className="btnAceptar"
          size="huge"
          inverted
        >
          COMENZAR
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Llegaste a tu destino!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Enviar notificación de inicio de ruta a Sodimac?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default" autoFocus>
            NO
          </Button>
          <Button onClick={handleClose} color="#DD0021" autoFocus>
            SI
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
