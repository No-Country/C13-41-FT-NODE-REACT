import { Button, Snackbar, Alert } from '@mui/material';
const FormAlerts = ({ successSignup, errorSignup, errorMessage, redirecting }) => {
	return (
		<>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={successSignup}
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
				open={errorSignup}
				autoHideDuration={3000}
				message='Error creating account'
				onClose={() => {}}
			>
				<Alert severity='error' sx={{ width: '100%' }}>
					{errorMessage ? errorMessage : 'Error creating account'}
				</Alert>
			</Snackbar>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={redirecting}
				autoHideDuration={3000}
				message='Redirecting to login'
				onClose={() => {}}
			>
				<Alert severity='info' sx={{ width: '100%' }}>
					Redirecting to login
				</Alert>
			</Snackbar>
		</>
	);
};

export default FormAlerts;
