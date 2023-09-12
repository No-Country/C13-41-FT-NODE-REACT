import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearcherInput = ({ setFilterByName }) => {
	return (
		<Box
			component={'section'}
			display={'flex'}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			paddingY={{ xs: 1, sm: 4 }}
			paddingX={1}
		>
			<TextField
				id='outlined-search'
				label='Find professionals by name'
				type='search'
				fullWidth
				onChange={e => setFilterByName(e.target.value)}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
};

export default SearcherInput;
