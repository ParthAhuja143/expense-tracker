import React, { useContext } from 'react'
import {Avatar, IconButton, List as MUIList, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide} from '@material-ui/core'
import useStyles from './styles'
import { Delete, MoneyOff } from '@material-ui/icons'
import { ExpenseTrackerContext } from '../../../context/context'

const List = () => {

    const classes = useStyles()
    const {deleteTransactions , transactions} = useContext(ExpenseTrackerContext)

    //const global = useContext(ExpenseTrackerContext)

    //console.log(global)

    return (
        <MUIList dense = {false} className = {classes.list}>
            {transactions.map((transaction) => (
                <Slide direction = 'down' in mountOnEnter unmountOnExit key = {transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className = {transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                              <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary = {transaction.category} secondary = {`Rs. ${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge = 'end' aria-label = 'delete' onClick = {() => deleteTransactions(transaction.id)}>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide> 
            ))}
        </MUIList>
    )
}

export default List
