import { Snackbar } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import MuiAlert from '@material-ui/lab/Alert'

const CustomisedSnackbar = ({open , setOpen }) => {

    const classes = useStyles()

    const handleClose = (event , reason) => {
        if(reason === 'clickaway'){
            return // don't close
        }

        setOpen(false)  // close if not a clickaway
    }

    return (
        <div className = {classes.root}>
            <Snackbar anchorOrigin = {{ vertical : 'top' , horizontal : 'right'}} open = {open} autoHideDuration = {3000} onClose = {handleClose}>
               <MuiAlert onClose = {handleClose} severity = 'success' elevation = {6} variant = 'filled' >
                   Transaction Successfully Created
               </MuiAlert>    
            </Snackbar>
        </div>
    )
}

export default CustomisedSnackbar
