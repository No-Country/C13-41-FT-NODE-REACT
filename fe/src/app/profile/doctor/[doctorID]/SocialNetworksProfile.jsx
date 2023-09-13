import { colors, titleFontSizeDesktop, titleFontSizeMobile } from '@/app/colors';
import { Link, Stack, Typography } from '@mui/material';
import { Instagram, Facebook, YouTube, LinkedIn } from '@mui/icons-material';

const SocialNetworksProfile = ({ doctorData }) => {
	const matchNetwork = network => {
		if (network.includes('instagram')) {
			return <Instagram sx={{ color: colors.buttonIcon }} />;
		} else if (network.includes('facebook')) {
			return <Facebook sx={{ color: colors.buttonIcon }} />;
		} else if (network.includes('youtube')) {
			return <YouTube sx={{ color: colors.buttonIcon }} />;
		} else if (network.includes('linkedin')) {
			return <LinkedIn sx={{ color: colors.buttonIcon }} />;
		}
	};
	return (
		<Stack direction={'column'} spacing={1} justifyContent={'start'}>
			<Typography
				variant={'h4'}
				color={colors.text}
				fontWeight={600}
				className='inter'
				fontSize={{ xs: titleFontSizeMobile.h4, sm: titleFontSizeDesktop.h4 }}
			>
				Social Networks
			</Typography>
			{doctorData && doctorData.socialnetworks?.length > 0 && (
				<Stack direction={'row'} spacing={2} justifyContent={'start'} alignItems={'center'}>
					{matchNetwork(doctorData.socialnetworks[0].link)}
					<Link
						href={doctorData.socialnetworks[0].link}
						target='_blank'
						rel='noopener noreferrer'
						underline='none'
					>
						<Typography
							variant={'body2'}
							color={colors.text}
							fontWeight={400}
							className='inter'
							fontSize={{ xs: titleFontSizeMobile.body, sm: titleFontSizeDesktop.body }}
						>
							{doctorData.socialnetworks[0].link}
						</Typography>
					</Link>
				</Stack>
			)}
		</Stack>
	);
};

export default SocialNetworksProfile;
