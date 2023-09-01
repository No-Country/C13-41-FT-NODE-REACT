import { Button, Snackbar, Alert } from '@mui/material';
const FormAlerts = (props) => {
  return (
    <>
      <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={props.successSignup}
          autoHideDuration={3000}
          message='Account created successfully'
          onClose={() => {}}
        >
          <Alert severity='success' sx={{ width: '100%' }}>
            Account created
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={props.errorSignup}
          autoHideDuration={3000}
          message='Error creating account'
          onClose={() => {}}
        >
          <Alert severity='error' sx={{ width: '100%' }}>
            Error creating account
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={props.message}
          autoHideDuration={3000}
          message='Redirecting to login'
          onClose={() => {}}
        >
          <Alert severity='info' sx={{ width: '100%' }}>
            Redirecting to login
          </Alert>
        </Snackbar>
      </>
  )
}

export default FormAlerts