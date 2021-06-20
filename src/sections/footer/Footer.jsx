import React from 'react';
import { Grid, Box, Breadcrumbs, Link, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { styled } from '@material-ui/system';
import AppleDirectoryForLapTop from './AppleDirectoryForLapTop';
import AppleDirectoryForTablet from './AppleDirectoryForTablet';
const Container = styled(Grid, { name: 'footer' })(({ theme }) => ({
	backgroundColor: '#f5f5f7',
	color: '#1d1d1f',
	width: '100%',
	minWidth: '320px',
	height: 'auto',
	fontSize: '12px',
	fontFamily: `"SF Pro Text","Myriad Set Pro","SF Pro Icons","Apple Legacy Chevron","Helvetica Neue","Helvetica","Arial",sans-serif`,
	lineHeight: 1.33337,
	fontWeight: 400,
	letterSpacing: '-.01em',
	position: 'relative',
	zIndex: 1,
	overflow: 'hidden',
	[theme.breakpoints.up('laptop')]: {
		minWidth: '1024px'
	}
}));
const Content = styled(Box, { name: 'content-container' })(({ theme }) => ({
	padding: '0 16px',
	height: '100%',
	[theme.breakpoints.up('tablet')]: {
		padding: '0 22px'
	},
	[theme.breakpoints.up('laptop')]: {
		maxWidth: '1024px',
		margin: '0 auto'
	}
}));

const Header = styled(Box, { name: 'header' })(({ theme }) => ({
	color: '#6e6e73',
	borderBottom: '1px solid #a1a1a6',
	padding: '17px 0 11px 14.375px',
	width: '100%',
	height: 'auto'
}));
const FootNote = styled('p', { name: 'foot-note' })(({ theme }) => ({
	paddingBottom: '0.8rem',
	margin: 0,
	position: 'relative',
	'& .foot-note-marker': {
		position: 'absolute',
		content: '"1. "',
		top: 0,
		left: '-14.375px',
		width: '14.375px',
		height: '16px',
		textAlign: 'center'
	}
}));
const CustomBreadCrumbs = styled(Breadcrumbs, { name: 'custom-breadcrumbs' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		padding: '17px 0',

		color: '#a1a1a6',

		fontSize: '12px'
	}
}));
const HomeIcon = styled('span', { name: 'home-icon' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '14px',
		height: '18px',
		backgroundImage:
			'url(https://www.apple.com/ac/globalfooter/6/en_US/assets/ac-footer/breadcrumbs/apple/icon_dark_large.svg)',
		backgroundRepeat: 'no-repeat',
		display: 'block',
		color: 'transparent',
		backgroundSize: 'cover',
		backgroundPositionY: '-38px'
	},
	[theme.breakpoints.up('tablet')]: {
		backgroundPositionY: '-36px'
	}
}));
const AppleDirectoryContainer = styled(Box, { name: 'apple-directory-container' })(({ theme }) => ({
	[theme.breakpoints.up('moibile')]: {
		width: '100%',
		height: 'auto',
		display: 'flex',
		flexDirection: 'column'
	},
	[theme.breakpoints.up('tablet')]: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
}));
export const AppleDirectoryColumn = styled(Box, { name: 'directory-column' })(({ theme }) => ({
	flexBasis: '20%',
	maxWidth: '20%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	height: '100%'
}));
export const ColumnTitle = styled('p', { name: 'column-title' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		fontWeight: 600,
		width: '100%',
		marginBottom: '9.6px',
		marginTop: '0px'
	}
}));

const FooterTheEnd = styled(Box, { name: 'footer-the-end' })(({ theme }) => ({
	width: '100%',
	height: 'auto',
	padding: '17px 0px 19px 0px',
	[theme.breakpoints.up('laptop')]: {
		padding: '34px 0px 21px'
	}
}));

const Footer = () => {
	const breadcrumbs = [
		<Link key='1' color='inherit' href='/'>
			<HomeIcon />
		</Link>,
		<Link key='2' color='inherit' href='/'>
			iPhone
		</Link>
	];
	const theme = useTheme();
	const below_733 = useMediaQuery(theme.breakpoints.down('tablet'));

	return (
		<Container component='footer'>
			<Content>
				<Header>
					<FootNote>
						<small className='foot-note-marker'>*</small>
						this site is built only for learning purposes, all the image files and IP belong to Apple Inc.
					</FootNote>
					<FootNote>
						<small className='foot-note-marker'>1.</small>
						Price includes a $30 AT&T, T-Mobile, Sprint, or Verizon discount. Requires activation with carrier. Monthly
						pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Citizens One
						or Apple Card Monthly Installments and iPhone activation with AT&T, Sprint, T-Mobile, or Verizon for
						purchases in an Apple Store. Taxes and shipping not included. Additional Apple Card Monthly Installments and
						iPhone Payments terms apply.
					</FootNote>
					<FootNote>
						<small className='foot-note-marker'>2.</small>Monthly pricing: Available to qualified customers and requires
						0% APR, 24-month installment loan with Citizens One or Apple Card Monthly Installments and iPhone activation
						with AT&T, Sprint, T-Mobile, or Verizon for purchases in an Apple Store. Taxes and shipping not included.
						Additional Apple Card Monthly Installments and iPhone Payments terms apply.
					</FootNote>
					<FootNote>
						<small className='foot-note-marker'>3.</small>
						The display has rounded corners that follow a beautiful curved design, and these corners are within a
						standard rectangle. When measured as a standard rectangular shape, the screen is 5.42 inches (iPhone 12
						mini), 6.06 inches (iPhone 12 Pro, iPhone 12, iPhone 11), or 6.68 inches (iPhone 12 Pro Max) diagonally.
						Actual viewable area is less.
					</FootNote>
				</Header>
				<CustomBreadCrumbs separator='›' aria-label='breadcrumb'>
					{breadcrumbs}
				</CustomBreadCrumbs>
				<AppleDirectoryContainer>
					{below_733 ? <AppleDirectoryForTablet /> : <AppleDirectoryForLapTop />}
				</AppleDirectoryContainer>
				<FooterTheEnd sx={{ position: 'relative' }}>
					<Box
						sx={{
							borderBottom: { sm: '1px solid #424245' },
							display: 'flex',
							color: '#a1a1a6',
							gap: '4px',
							flexWrap: 'wrap'
						}}>
						<FootNote>More ways to shop: </FootNote>
						<FootNote sx={{ color: '#2997ff' }}>Find an Apple Store</FootNote>
						or
						<FootNote sx={{ color: '#2997ff' }}>Find an Apple Store</FootNote>
						<FootNote>near you. Or call 1-800-MY-APPLE.</FootNote>
					</Box>
					{/*locale */}
					<Box
						sx={{
							color: '#a1a1a6',
							position: { xs: 'relative', sm: 'absolute' },
							minWidth: '30px',
							top: { sm: '50%' },
							right: { sm: 0 }
						}}>
						<FootNote sx={{ p: 0 }}>United States</FootNote>
					</Box>
					{/*legal */}
					<Box sx={{ color: '#a1a1a6', pt: '0.8rem' }}>
						<FootNote>Copyright © 2021 Apple Inc. All rights reserved.</FootNote>
						{/*legal links */}
						<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
							<FootNote
								sx={{
									pr: '10px',
									pb: '0px',
									height: 'fit-content',
									borderRight: '1px solid #424245',
									marginRight: '10px'
								}}>
								Privacy Policy
							</FootNote>
							<FootNote
								sx={{
									pr: '10px',
									pb: '0px',
									height: 'fit-content',
									borderRight: '1px solid #424245',
									marginRight: '10px'
								}}>
								Terms of Use
							</FootNote>
							<FootNote
								sx={{
									pr: '10px',
									pb: '0px',
									height: 'fit-content',
									borderRight: '1px solid #424245',
									marginRight: '10px'
								}}>
								sales and refunds
							</FootNote>
							<FootNote
								sx={{
									pr: '10px',
									pb: '0px',
									height: 'fit-content',
									borderRight: '1px solid #424245',
									marginRight: '10px'
								}}>
								Legal
							</FootNote>
							<FootNote>Site Maps</FootNote>
						</Box>
					</Box>
				</FooterTheEnd>
			</Content>
		</Container>
	);
};

export default Footer;
