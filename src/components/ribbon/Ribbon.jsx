import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const RibbonWrapper = styled(Box, { name: 'ribbon-wrapper' })(({ theme }) => ({
	width: '100%',
	height: 'auto',
	color: theme.palette.common.white,
	// backgroundColor: theme.palette.common.ribbon_background_color,
	animation: `ribbon-drop 0.8s ${theme.transitions.easing.easeInOut} `,
	[theme.breakpoints.up('tablet')]: {
		height: '50px'
	},
	'@keyframes ribbon-drop': {
		from: { transform: 'translateY(-100%)', opacity: 0 },
		to: { transform: 'translateY(0px)', opacity: 1 }
	}
}));
const RibbonContent = styled(Box, { name: 'ribbon-content' })(({ theme }) => ({
	width: '100%',
	height: '100%',
	padding: '9px 34px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
	backgroundColor: theme.palette.common.ribbon_background_color,
	animation: `animate-background 5s ${theme.transitions.easing.easeInOut} `,
	'@keyframes animate-background': {
		from: { backgroundColor: theme.palette.common.ribbon_background_color_initial },
		to: { backgroundColor: theme.palette.common.ribbon_background_color }
	}
}));
const LearnMoreButton = styled(Button, { name: 'ribbon-learn-more' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		// display: 'inline-block',
		padding: 0,
		margin: '0px auto',
		...theme.typography.caption,
		display: 'flex',
		alignItems: 'center',
		maxWidth: '90px',
		'& .MuiSvgIcon-root': {
			width: '9px',
			height: '12px'
		}
	}
}));
const Ribbon = () => {
	return (
		<RibbonWrapper>
			<RibbonContent>
				<Typography variant='caption'>
					Get 3% Daily Cash back with Apple Card. And pay for your new iPhone over 24 months, interest-free when you
					choose Apple Card Monthly Installments.{' '}
					<LearnMoreButton component='a' endIcon={<ArrowForwardIosIcon />}>
						learn more
					</LearnMoreButton>
				</Typography>
			</RibbonContent>
		</RibbonWrapper>
	);
};

export default Ribbon;
