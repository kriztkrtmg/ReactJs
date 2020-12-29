import React, {useEffect, useState} from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import firebase from 'firebase';
import { useHistory, useParams } from 'react-router-dom';
import ToDoList from './ToDoList';

export default function TodoHome() {

    let history = useHistory();
    let params = useParams();

    const [userProfile, setUserProfile] = useState({name:"", email:"", phone:"", note:"", subject:""}); //Todo-List
    const [isSaving, setIsSaving] = useState(false); //Ux part

    //collecting new data to list fields...
    const handleChange = (event) => {
        userProfile[event.target.id] = event.target.value;
        setUserProfile({...userProfile, userProfile});
    }

    useEffect(() => {
        if(params.id !=='add'){
            getDataById();
        }
    }, [true])

    //Editing and updating feature...
    const getDataById = ()=> {
        const fireStore = firebase.firestore();
        let docRef = fireStore.collection("user-todo").doc("/"+params.id);
            docRef.get().then(function(doc) {
                if (doc.exists) {
                    userProfile.name = doc.data().name;
                    userProfile.email = doc.data().email;
                    userProfile.phone = doc.data().phone;
                    userProfile.note = doc.data().note;
                    userProfile.subject = doc.data().subject;
                    setUserProfile({...userProfile, userProfile});
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
    }

    //Saving the collected data in firebase database...
    const handleSave = (event) => {
        setIsSaving(true);
        const fireStore = firebase.firestore();
        if(params.id ==="add"){
            fireStore.collection("user-todo").add({
                name: userProfile.name,
                email: userProfile.email,
                phone: userProfile.phone,
                note: userProfile.note,
                subject: userProfile.subject,
            }).then((response)=> {
                setIsSaving(false);
                history.push('/data');

            }).catch(() => {
                setIsSaving(false);
            });
        }else{
            fireStore.collection("user-todo").doc(params.id).update({
                name: userProfile.name,
                email: userProfile.email,
                phone: userProfile.phone,
                note: userProfile.note,
                subject: userProfile.subject,
            }).then((response)=> {
                setIsSaving(false);
                history.push('/data');
            }).catch(() => {
                setIsSaving(false);
            });
        }
    }
    
    return (
        <div style={{margin:30}}>
            <div>
                <ToDoList 
                    isSaving={isSaving} 
                    userProfile={userProfile} 
                    handleChange={handleChange}
                />

                {isSaving ? <CircularProgress /> : ""}

                <Button style={{marginTop:20}} 
                    variant="contained" 
                    color="primary" 
                    onClick={handleSave} 
                    disabled={isSaving}
                >
                    Save Note
                </Button>
                <Button style={{marginTop:20, marginLeft:20}} 
                    variant="outlined" 
                    color="primary" 
                    onClick={()=>history.push('/data')} 
                >
                    Open Saved Notes
                </Button>
            </div>
      </div>
    )
}




  

  
