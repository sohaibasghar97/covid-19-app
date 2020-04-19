import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}))

const PaginationView = ({ cardsPerPage, totalCard,paginate }) => {
  const pages =  Math.ceil(totalCard / cardsPerPage) 
  const classes = useStyles()
  const handleChange = (event, value) => {
    console.log(value)
    paginate(value)
  }
  return (
    <Paper
      elevation={8}
      variant={'elevation'}
      className={classes.root}
      style={{ display: 'flex', justifyContent: 'center',background:'#fff',marginTop:20,paddingBottom:20 }}
    >
      <Pagination variant={'outlined'} shape={'rounded'} count={pages} color={'standard'} onChange={handleChange} />
    </Paper>
  )
}
export default PaginationView
