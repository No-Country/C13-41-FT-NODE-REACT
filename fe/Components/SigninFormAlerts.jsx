import { Snackbar, Alert } from '@mui/material';
const SigninFormAlerts = ({ successSignin, errorSignin, errorMessage, redirecting }) => {
	return (
		<>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={successSignin}
				autoHideDuration={3000}
				onClose={() => {}}
			>
				<Alert severity='success' sx={{ width: '100%' }}>
					Login successful
				</Alert>
			</Snackbar>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={errorSignin}
				autoHideDuration={3000}
				onClose={() => {}}
			>
				<Alert severity='error' sx={{ width: '100%' }}>
					{errorMessage ? errorMessage : 'Error to login. Try again'}
				</Alert>
			</Snackbar>
			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={redirecting}
				autoHideDuration={3000}
				onClose={() => {}}
			>
				<Alert severity='info' sx={{ width: '100%' }}>
					Redirecting to home page
				</Alert>
			</Snackbar>
		</>
	);
};

export default SigninFormAlerts;
