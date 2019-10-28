import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // height: '100vh',
    margin: 'auto',
    width: 300,
  },
  rootPaper: {
    margin: 'auto',
    width: 300,
  },
  paperHead: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
    background: theme.palette.primary.light,
    color: 'white',
  },
  paperBody: {
    padding: theme.spacing(2, 2),
  },
  inputMargin: {
    margin: theme.spacing(1),
  },
  iconButton: {
    marginRight: 2,
  },
  textField: {
    width: 200,
    maxWidth: 200,
  },
  button: {
    margin: 'auto',
  },
}))
