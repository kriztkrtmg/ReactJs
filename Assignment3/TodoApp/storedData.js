import React, {useEffect, useState} from 'react';
import firebase from 'firebase';
import { CircularProgress, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import {Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';
import DeleteNoteDialouge from './DeleteNoteDialouge';
import UpdateIcon from '@material-ui/icons/Update';
import './style.css';



export default function StoredData(props) {
    let history = useHistory();

    const [dataFromFirestore, setDataFromFirestore] = useState(); //Get data from firestore
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState();
    const [isDeleting, setIsDeleting] = useState(false); //delete garesi load garna lai
  

   

    const getDataFromFirebase = async() => {
        const snapshot = await firebase.firestore().collection('user-todo').get();
        return snapshot.docs.map(doc => doc);
    };

    useEffect(() => {
        callDataAgainAfterDeleteOperation();
    },[true])

    const callDataAgainAfterDeleteOperation = () => {
        getDataFromFirebase().then( (data)=> {
            setDataFromFirestore(data);
            setIsLoading(false);
        }).catch(() => {
            alert('Error getting data from firebase')
        })
    }

    const handleClose = () => {
        setOpen(false)
    }
    
    const onDeleteItem = () => {
        setIsDeleting(true);
        const fireStore = firebase.firestore();
        fireStore.collection("user-todo").doc("/"+selectedNote).delete().then(function() {
            setIsDeleting(false);
            callDataAgainAfterDeleteOperation();
        }).catch(function(error) {
            setIsDeleting(false);
        });
        setOpen(false)
    }


    const onSelectedNoteForDelete = (id) => {
        setSelectedNote(id);
        setOpen(true);
    }


    return (
        <div>
            <div className="container-1">
                <h1 className="h1">Your Notes</h1>
                <Button style={{margin:20}} 
                    variant="contained" 
                    color="primary" 
                    onClick={()=> history.push('/todo/add')}
                >
                    Add Note
                </Button>
            </div>
            <div className="mainDataDisplay">
                { isLoading ? <CircularProgress /> : 
                    <List className="listStyle">
                        {dataFromFirestore.map((item) => 
                            <ListItem>
                                <ListItemText className="listItemStyle"
                                    primary={item.data().name} 
                                    secondary={item.data().note}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="update">
                                        <UpdateIcon onClick={()=>history.push('/todo/'+item.id) }/>
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon onClick={()=>onSelectedNoteForDelete(item.id) }/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )}
                </List>
                }
                <DeleteNoteDialouge 
                    open={open} 
                    isDeleting={isDeleting}
                    onDeleteItem={onDeleteItem}
                    handleClose={handleClose} 
                /> 

            </div>
        </div>
    )
}
