import React from 'react';
import Grid from '@material-ui/core/Grid';
import {TextField } from '@material-ui/core';

export default function ToDoList(props) {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs="12" sm="4" style={{marginTop:20}}>
                    <TextField 
                        id="name" 
                        label="Your Name"
                        variant="outlined"
                        disabled={props.isSaving}
                        fullWidth={true}
                        value={props.userProfile.name}
                        onChange={props.handleChange}
                    />
                </Grid>
                <Grid item xs="12" sm="4" style={{marginTop:20}}>
                    <TextField 
                        id="email" 
                        label="Email" 
                        variant="outlined"
                        helperText="Please enter valid email address"
                        disabled={props.isSaving}
                        fullWidth={true}
                        value={props.userProfile.email}
                        onChange={props.handleChange}
                    />
                </Grid>
                <Grid item xs="12" sm="4" style={{marginTop:20}}>
                    <TextField 
                        id="phone" 
                        label="Phone Number" 
                        variant="outlined"
                        helperText="Please enter valid phone number"
                        disabled={props.isSaving}
                        fullWidth={true}
                        value={props.userProfile.phone}
                        onChange={props.handleChange}
                    />
                </Grid>
            </Grid>
            
                <Grid item xs="12" sm="6" style={{marginTop:20}}>
                    <TextField 
                        id="subject" 
                        label="Note Title"
                        variant="outlined"
                        disabled={props.isSaving}
                        fullWidth={true}
                        value={props.userProfile.subject}
                        onChange={props.handleChange}
                    />
                </Grid> 
            
            <div>
                <Grid item sm="12" style={{marginTop:20}}>
                    <TextField 
                        id="note" 
                        label="Your Note" 
                        variant="outlined"
                        helperText="Something to write"
                        disabled={props.isSaving}
                        fullWidth={true}
                        multiline={true}
                        rowsMax="5"
                        rows="3"
                        value={props.userProfile.note}
                        onChange={props.handleChange}
                        
                    />
                </Grid>
            </div>
        </div>
    )
}
