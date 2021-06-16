import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { styled } from '@material-ui/core/styles';
const Section = styled(Grid, { name: 'section-hero' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%'
		// height: '100vh' //later switch to auto
	}
}));
const Iphone12Container = styled(Box, { name: 'iphone-12-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',

		paddingTop: '122px',
		paddingBottom: '40px'
	},
	[theme.breakpoints.up('tablet')]: {
		paddingBottom: '11px'
	},
	[theme.breakpoints.up('laptop')]: {
		paddingBottom: '13px'
	}
}));
const Iphone12ProContainer = styled(Box, { name: 'iphone-12-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',

		paddingTop: '56px',
		backgroundColor: '#000',
		color: theme.palette.common.white
	},
	[theme.breakpoints.up('tablet')]: {
		paddingTop: '75px'
	},
	[theme.breakpoints.up('laptop')]: {
		paddingTop: '110px',
		paddingBottom: '75px'
	}
}));
const SectionContent = styled(Box, { name: 'section-content-row' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		width: '87.5%',

		margin: '0 auto'
	},
	[theme.breakpoints.up('tablet')]: {
		width: '692px'
	},
	[theme.breakpoints.up('laptop')]: {
		width: '980px'
	}
}));
const TextWrapper = styled(Box, { name: 'text-wrapper' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		marginBottom: '25px',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	[theme.breakpoints.up('tablet')]: {
		width: '66.666667%',
		margin: '0 auto 58px auto'
	},
	[theme.breakpoints.up('laptop')]: {
		width: '58.33333%',
		margin: '0 auto 35px auto'
	}
}));
const BuyButton = styled(Button, { name: 'buy-cta-button' })(({ theme }) => ({
	...theme.typography.tile_copy,
	padding: '8px 16px',
	borderRadius: '980px',
	background: '#0071e3',
	color: '#fff',
	'&:hover': {
		background: '#0077ED'
	}
}));
const LearnMoreButton = styled(Button, { name: 'learn-more-button' })(({ theme }) => ({
	...theme.typography.tile_copy,
	padding: 0,
	'& .MuiSvgIcon-root': {
		width: '12.25px',
		height: '20px'
	}
}));

const Iphone12BackgroudImage = styled('figure', { name: 'iPhone-12-backgroundImage' })(({ theme }) => ({
	backgroundImage: 'url(./hero_section_image/iphone_12_non_ar_small_2x.jpg)',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	width: '310px',
	height: '289px',
	position: 'relative',
	left: '50%',
	marginLeft: '-155px',
	[theme.breakpoints.up('tablet')]: {
		backgroundImage: 'url(./hero_section_image/iphone_12_non_ar__medium.jpg)',
		width: '981px',
		height: '352px',
		marginLeft: '-490.5px'
	},
	[theme.breakpoints.up('laptop')]: {
		backgroundImage: 'url(./hero_section_image/iphone_12_non_ar__large_2x.jpg)',
		width: '1263px',
		height: '452px',
		marginLeft: '-631.5px'
	}
}));

const Iphone12ProBackgroudImage = styled('figure', { name: 'iPhone-12-pro-backgroundImage' })(({ theme }) => ({
	backgroundImage: 'url(./hero_section_image/iphone_12_pro__small_2x.jpg)',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	width: '260px',
	height: '514px',
	position: 'relative',
	left: '50%',
	marginLeft: '-130px', // position works with left and negative margin to center the image you want to display
	[theme.breakpoints.up('tablet')]: {
		backgroundImage: 'url(./hero_section_image/iphone_12_pro__medium_2x.jpg)',
		width: '789px',
		height: '315px',
		marginLeft: '-278.5px'
	},
	[theme.breakpoints.up('laptop')]: {
		backgroundImage: 'url(./hero_section_image/iphone_12_pro__large_2x.jpg)',
		width: '1505px',
		height: '601px',
		marginLeft: '-525.5px'
	}
}));
const HeroSection = () => {
	return (
		<Section component='section'>
			<Iphone12Container>
				<SectionContent>
					<TextWrapper>
						<Typography variant='eyebrow'>iPhone 12 and iPhone 12 mini</Typography>
						<Typography variant='headline' sx={{ mt: { mobile: '9px', tablet: '11px', laptop: '9px' } }}>
							Blast past fast.
						</Typography>
						<Typography
							variant='tile_copy'
							sx={{
								maxWidth: { mobile: '218px', tablet: '100%' },
								mt: { mobile: '14px', tablet: '23px', laptop: '25px' },
								mx: { mobile: 'auto' }
							}}>
							From $29.12/mo. for 24 mo. or $699 before trade‑in
						</Typography>
						<Box
							sx={{
								mt: { mobile: '14px', tablet: '29px' },
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%'
							}}>
							<BuyButton>Buy</BuyButton>
							<LearnMoreButton endIcon={<ArrowForwardIosIcon />} sx={{ margin: { mobile: '16px 19px 0px 19px' } }}>
								Learn More
							</LearnMoreButton>
						</Box>
					</TextWrapper>
					{/*Image container */}
					<Box sx={{ width: '100%' }}>
						<Iphone12BackgroudImage />
					</Box>
				</SectionContent>
			</Iphone12Container>
			<Iphone12ProContainer>
				<SectionContent>
					<TextWrapper>
						<Typography variant='eyebrow'>iPhone 12 Pro and iPhone 12 Pro Max</Typography>
						<Typography variant='headline' sx={{ mt: { mobile: '9px', tablet: '11px', laptop: '9px' } }}>
							It’s a leap year.
						</Typography>
						<Typography
							variant='tile_copy'
							sx={{
								maxWidth: { mobile: '218px', tablet: '100%' },
								mt: { mobile: '14px', tablet: '23px', laptop: '25px' },
								mx: { mobile: 'auto' }
							}}>
							From $41.62/mo. for 24 mo. or $999 before trade‑in
						</Typography>
						<Box
							sx={{
								mt: { mobile: '14px', tablet: '29px' },
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%'
							}}>
							<BuyButton>Buy</BuyButton>
							<LearnMoreButton endIcon={<ArrowForwardIosIcon />} sx={{ margin: { mobile: '16px 19px 0px 19px' } }}>
								Learn More
							</LearnMoreButton>
						</Box>
					</TextWrapper>
					{/*Image container */}
					<Box sx={{ width: '100%' }}>
						<Iphone12ProBackgroudImage />
					</Box>
				</SectionContent>
			</Iphone12ProContainer>
		</Section>
	);
};

export default HeroSection;
