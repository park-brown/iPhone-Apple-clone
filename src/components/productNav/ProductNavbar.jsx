import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CustomSwipeableViews from '../customSwipeableViews/CustomSwipeableViews';
const ProductLink = styled(Box, { name: 'product-link' })(({ theme }) => ({
	color: theme.palette.common.white,
	padding: 0,
	marginTop: '3px',
	textAlign: 'center',
	width: 'auto',
	height: '77px',
	position: 'relative'
}));
const ProductIcon = styled('figure', { name: 'product-icon' })(({ url, width }) => ({
	// destruction props
	backgroundImage: `${url}`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundPosition: 'center bottom',
	display: 'block',
	margin: '0 auto 7px',
	height: '54px',
	width: `${width}`
}));
const TypographyNew = styled(Typography, { name: 'product-item-new' })(({ theme }) => ({
	...theme.typography.chapternav_new,
	display: 'block',
	position: 'absolute',
	top: '100%',
	left: 0,
	color: theme.palette.common.new,
	width: '100%'
}));
const product_nav_link_description = [
	{
		url: 'url(./product_nav_icon/iphone_12_pro_dark__large.svg)',
		label: '	iPhone 12 Pro',
		width: '37px',
		new: true
	},
	{
		url: 'url(./product_nav_icon/iphone_12_dark__large.svg)',
		label: 'iPhone 12',
		width: '36px',
		new: true
	},
	{
		url: 'url(./product_nav_icon/iphone_se_dark_large.svg)',
		label: 'iPhone SE',
		width: '19px',
		new: false
	},
	{
		url: 'url(./product_nav_icon/iphone_11_dark__large.svg)',
		label: 'iPhone 11',
		width: '22px',
		new: false
	},
	{
		url: 'url(./product_nav_icon/iphone_xr_dark__large.svg)',
		label: 'iPhone XR',
		width: '22px',
		new: false
	},
	{
		url: 'url(./product_nav_icon/iphone_comp_dark__large.svg)',
		label: 'Compare',
		width: '51px',
		new: false
	},
	{
		url: 'url(./product_nav_icon/iphone_airpods_dark__large.svg)',
		label: 'AirPods',
		width: '27px',
		new: false
	},
	{
		url: 'url(./product_nav_icon/airtag_dark__large.svg)',
		label: 'AirTag',
		width: '30px',
		new: true
	},
	{
		url: 'url(./product_nav_icon/iphone_acc_dark__large.svg)',
		label: 'Accessories',
		width: '35px',
		new: false
	},
	{
		url: 'url(./product_nav_icon/iphone_apple_card_dark__large.svg)',
		label: 'Apple Card',
		width: '36px',
		new: false
	},
	{
		url: 'url(./product_nav_icon/iphone_ios_dark_large.svg)',
		label: 'IOS 14',
		width: '32px',
		new: false
	}
];
const ProoductNavbar = () => {
	return (
		<AppBar
			component='nav'
			sx={{
				top: 56,
				bgcolor: 'rgba(0,0,0,0.92)',
				minHeight: '100px',
				py: '8px',
				overflow: 'hidden',
				flexDirection: 'row',
				justifyContent: 'center'
			}}>
			<Toolbar
				sx={{
					maxWidth: { tablet: '960px', laptop: '1280px' },
					width: '100%',
					minHeight: '100px',
					px: '34px',
					justifyContent: 'center'
				}}>
				<CustomSwipeableViews slideClassName='product-nav-item' slideStyle={{ width: null, overflow: null }}>
					{product_nav_link_description.map((item) => (
						<ProductLink key={item.label}>
							<ProductIcon url={item.url} width={item.width} />
							<Typography variant='chapternav_label' sx={{ display: 'block' }}>
								{item.label}
							</Typography>
							{item.new === true ? <TypographyNew>new</TypographyNew> : null}
						</ProductLink>
					))}
				</CustomSwipeableViews>
				{/*Control button */}
				<Box
					sx={{
						color: 'common.white',
						position: 'absolute',
						right: 0,
						top: 0,
						width: '34px',
						height: '100%',
						display: { mobile: 'flex', laptop: 'none' },
						alignItems: 'center',
						justifyContent: 'center',
						borderLeft: '1px solid #d2d2d7'
					}}>
					<KeyboardArrowRight />
				</Box>
				<Box
					sx={{
						color: 'common.white',
						position: 'absolute',
						top: 0,
						left: 0,
						width: '34px',
						height: '100%',
						display: { mobile: 'flex', laptop: 'none' },
						alignItems: 'center',
						justifyContent: 'center',
						borderRight: '1px solid #d2d2d7'
					}}>
					<KeyboardArrowLeft />
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default ProoductNavbar;
