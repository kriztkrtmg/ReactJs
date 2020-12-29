import React from 'react';
import { CircularProgress } from '@material-ui/core';
import {Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button} from '@material-ui/core';

export default function DeleteNoteDialouge(props) {


    return (
        <div>
            <Dialog
                    open={props.open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{"Do you really want to delete it?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You cannot undo this action. Once delete, it will be forever gone.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={props.handleClose} color="primary" disabled={props.isDeleting}>
                    Disagree
                </Button>
                <Button onClick={props.onDeleteItem} color="primary" autoFocus disabled={props.isDeleting}>
                    Agree
                </Button>
                {props.isDeleting ? <CircularProgress/> : ""}
                </DialogActions>
                </Dialog>
        </div>
    )
}
