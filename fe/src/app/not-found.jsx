'use client';
import { styled } from '@mui/system';
import { colors } from './colors';
import Link from 'next/link';

const ErrorPageContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	userSelect: 'none',
	backgroundColor: 'white',
});

const TextError = styled('h1')({
	textAlign: 'center',
	color: colors.text,
	fontSize: '24px',
	fontWeight: 'bold',
	fontFamily: 'KittyKatt',
	paddingTop: '1em',
	paddingBottom: '1em',
});

const ImageError = styled('img')({
	display: 'flex',
});

function Error404() {
	return (
		<ErrorPageContainer>
			<TextError>Error 404 - Page Not Found</TextError>

			<Link
				draggable='false'
				style={{
					fontSize: '22px',
					color: colors.border,
					textDecoration: 'none',
					fontWeight: 'bold',
				}}
				href={'/'}
			>
				Go back to the main page
			</Link>
			<ImageError
				draggable='false'
				src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif'
			></ImageError>
		</ErrorPageContainer>
	);
}

export default Error404;
