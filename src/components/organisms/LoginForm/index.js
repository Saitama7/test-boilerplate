import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

// Mui Components
import { Paper, Typography, Grid } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'
import { AccountCircle, VisibilityOff, Visibility } from '@material-ui/icons'

// Local Components
import { InputWithIcon, LoadingButton } from 'components'

import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
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
  button: {
    margin: 'auto',
  },
}))


const LoginForm = ({ handleSubmit, submitting }) => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={classes.root}>
      <Paper className={classes.rootPaper}>
        <Paper square className={classes.paperHead}>
          <LockIcon fontSize="small" />
          <Typography variant="h6" component="h5" align="center">
            Authentication
          </Typography>
        </Paper>
        <Paper square className={classes.paperBody}>
          <form onSubmit={handleSubmit}>

            <Field name="username" label="username" placeholder="Username" icon={<AccountCircle />} component={InputWithIcon} />
            <Field
              name="password"
              label="password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              icon={showPassword ? <Visibility /> : <VisibilityOff />}
              iconClickable
              onIconClick={() => setShowPassword(!showPassword)}
              component={InputWithIcon}
            />

            <Grid container>
              <LoadingButton type="submit" disabled={submitting} loading={false} className={classes.button}>Log in</LoadingButton>
            </Grid>
          </form>
        </Paper>
      </Paper>
    </div>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default reduxForm({
  form: 'login', // a unique identifier for this form
})(LoginForm)
