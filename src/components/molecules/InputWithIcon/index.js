import React from 'react'
import PropTypes from 'prop-types'
import { TextField, FormControl, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  textField: {
    width: 200,
    maxWidth: 200,
  },
}))

const InputWithIcon = ({
  icon, iconClickable, onIconClick, input, ...rest
}) => {
  const classes = useStyles()
  const inputProps = { ...rest, ...input }


  return (
    <div>
      <Grid container spacing={1} alignItems="flex-end">
        { icon && (
          <Grid item onClick={() => iconClickable && onIconClick()}>
            {icon}
          </Grid>
        )}
        <Grid item>
          <FormControl className={classes.formControl} error={false}>
            <TextField
              className={classes.textField}
              {...inputProps}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  )
}

InputWithIcon.propTypes = {
  icon: PropTypes.any,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  iconClickable: PropTypes.bool,
  onIconClick: PropTypes.func,
}

export default InputWithIcon
