import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const LoginTemplate = ({ children, ...props }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} {...props}>
      {children}
    </div>
  )
}

LoginTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default LoginTemplate
