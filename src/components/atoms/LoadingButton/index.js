import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  container: {
    display: 'inline-block',
    position: 'relative',
    minWidth: 88,
  },
  fullWidth: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
  loader: {
    display: 'inline-flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  },
}))

function LoadingButton({
  className, children, color, loading, ProgressProps, ...rest
}) {
  const classes = useStyles()
  const progressClassName = cn(classes.loader, ProgressProps.className, { loading })

  return (
    <div className={cn(classes.container, className, { [classes.fullWidth]: rest.fullWidth })}>
      <Button className={classes.button} color={color} disabled={rest.disabled || loading} {...rest}>
        <>{children}</>
      </Button>
      <div className={progressClassName}>
        {loading && <CircularProgress color={color} {...ProgressProps} />}
      </div>
    </div>
  )
}

LoadingButton.propTypes = {
  children: PropTypes.any.isRequired,
  loading: PropTypes.bool,
  ProgressProps: PropTypes.objectOf(PropTypes.any),
  color: PropTypes.string,
  className: PropTypes.string,
}
LoadingButton.defaultProps = {
  loading: false,
  ProgressProps: {
    size: 28,
  },
  color: 'primary',
}

export default LoadingButton
