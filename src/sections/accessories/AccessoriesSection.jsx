import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import CustomLink from './CustomLink';
import { styled } from '@material-ui/core/styles';
const Section = styled(Grid, { name: 'section-accessories' })(({ theme }) => ({
	paddingTop: '72px',
	width: '100%',
	textAlign: 'center',
	height: 'auto',
	overflow: 'hidden',
	[theme.breakpoints.up('tablet')]: {
		paddingTop: '110px',
		maxWidth: '736px',
		margin: '0 auto'
	},
	[theme.breakpoints.up('laptop')]: {
		maxWidth: '1440px',
		width: '100%'
	}
}));
const AccessoriesSection = () => {
	return (
		<Section component='section'>
			<Typography
				variant='section_headline'
				component='h2'
				sx={{ mb: { mobile: '43px', tablet: '62px', laptop: '70px' } }}>
				Featured Accessories
			</Typography>
			<Box
				className='magsage-tile'
				sx={{
					p: { mobile: '71px 0', tablet: '93px 0', laptop: '71px 0' },
					display: 'flex',
					flexDirection: { mobile: 'column', tablet: 'row', laptop: 'row' },
					minHeight: { mobile: '377px', laptop: '530px' },
					maxWidth: { laptop: '1070px' },
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					backgroundColor: '#fff',
					margin: { mobile: '0 auto 10px' }
				}}>
				<Box
					className='copy_wrapper'
					sx={{ flexBasis: { mobile: '100%', tablet: '50%' }, mb: { mobile: '41px', tablet: 0 } }}>
					<Typography variant='tile_headline' component='h3' sx={{ mb: '16px' }}>
						MagSafe
					</Typography>
					<Typography variant='tile_copy' component='p' sx={{ maxWidth: '340px', mx: 'auto', color: 'grey.700' }}>
						Snap on a magnetic case, wallet, or both. And get faster wireless charging.
					</Typography>
					<CustomLink>Shop MagSafe accessories</CustomLink>
				</Box>
				<Box className='tile_image' sx={{ flexBasis: { mobile: '100%', tablet: '50%' } }}>
					<Box
						component='figure'
						sx={{
							backgroundImage: {
								mobile: 'url(./accessories_section/magsafe_small_2x.jpg)',
								tablet: 'url(./accessories_section/magsafe_medium_2x.jpg)',
								laptop: 'url(./accessories_section/magsafe_large_2x.jpg)'
							},
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							width: { mobile: '231px', tablet: '278px', laptop: '389px' },
							height: { mobile: '234px', tablet: '281px', laptop: '394px' },
							margin: 0
						}}></Box>
				</Box>
			</Box>
			<Box
				className='Airtag-tile'
				sx={{
					p: { mobile: '55px 0 0 0', tablet: 0, laptop: 0 },
					display: 'flex',
					flexDirection: { mobile: 'column', tablet: 'row', laptop: 'row' },
					minHeight: { mobile: '377px', laptop: '530px' },
					maxWidth: { laptop: '1070px' },
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					backgroundColor: '#fff',
					margin: { mobile: '0 auto 10px' }
				}}>
				<Box
					className='tile_image'
					sx={{ flexBasis: { mobile: '100%', tablet: '50%' }, order: { mobile: 2, tablet: 1 } }}>
					<Box
						component='figure'
						sx={{
							backgroundImage: {
								mobile: 'url(./accessories_section/airtag_small_2x.jpg)',
								tablet: 'url(./accessories_section/airtag_medium_2x.jpg)',
								laptop: 'url(./accessories_section/airtag_large_2x.jpg)'
							},
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							width: { mobile: '734px', tablet: '466px', laptop: '699px' },
							height: { mobile: '397px', tablet: '378px', laptop: '531px' },
							margin: { mobile: '0  0 0 -367px', tablet: 0 },
							position: { mobile: 'relative' },
							left: { mobile: '50%', tablet: 0 }
						}}></Box>
				</Box>
				<Box
					className='copy_wrapper'
					sx={{
						flexBasis: { mobile: '100%', tablet: '50%' },
						order: { mobile: 1, tablet: 2 }
					}}>
					<Typography variant='tile_headline' component='h3' sx={{ mb: '16px' }}>
						AirTag
					</Typography>
					<Typography variant='tile_copy' component='p' sx={{ maxWidth: '282px', mx: 'auto', color: 'grey.700' }}>
						Attach one to your keys. Slip another in your backpack. Then easily keep track of them in the Find My app.
					</Typography>
					<Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '282px', gap: '16px', mx: 'auto' }}>
						<CustomLink>Buy</CustomLink>
						<CustomLink>Learn more</CustomLink>
					</Box>
				</Box>
			</Box>
			<Box
				className='AirPods-tile'
				sx={{
					p: { mobile: '71px 0', tablet: '93px 0', laptop: '71px 0' },
					display: 'flex',
					flexDirection: { mobile: 'column', tablet: 'row', laptop: 'row' },
					minHeight: { mobile: '377px', laptop: '530px' },
					maxWidth: { laptop: '1070px' },
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					backgroundColor: '#fff',
					margin: { mobile: '0 auto 10px' }
				}}>
				<Box
					className='copy_wrapper'
					sx={{ flexBasis: { mobile: '100%', tablet: '50%' }, mb: { mobile: '41px', tablet: 0 } }}>
					<Typography variant='tile_headline' component='h3' sx={{ mb: '16px' }}>
						AirPods
					</Typography>
					<Typography variant='tile_copy' component='p' sx={{ maxWidth: '340px', mx: 'auto', color: 'grey.700' }}>
						Discover new engraving options for AirPods. Mix emoji, text, and numbers.
					</Typography>
					<Box sx={{ display: 'flex', justifyContent: 'center', maxWidth: '282px', gap: '16px', mx: 'auto' }}>
						<CustomLink>Buy</CustomLink>
						<CustomLink>Learn more</CustomLink>
					</Box>
				</Box>
				<Box className='tile_image' sx={{ flexBasis: { mobile: '100%', tablet: '50%' } }}>
					<Box
						component='figure'
						sx={{
							backgroundImage: {
								mobile: 'url(./accessories_section/iphone_airpods_medium_2x.jpg)',
								tablet: 'url(./accessories_section/iphone_airpods_medium_2x.jpg)',
								laptop: 'url(./accessories_section/iphone_airpods_large_2x.jpg)'
							},
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							width: { mobile: '321px', tablet: '321px', laptop: '473px' },
							height: { mobile: '158px', tablet: '158px', laptop: '233px' },
							margin: { mobile: 0, tablet: '0 0 0 -195px', laptop: '0 0 0 -283px' },
							left: { mobile: 'auto', tablet: '50%' },
							position: 'relative'
						}}></Box>
				</Box>
			</Box>
			<Box
				className='accessories-cta'
				sx={{ mt: '54px', p: '0 30px', width: '100%', display: 'flex', justifyContent: 'center' }}>
				<CustomLink>shop all iPhone accessories</CustomLink>
			</Box>
		</Section>
	);
};

export default AccessoriesSection;
