import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import CustomLink from '../accessories/CustomLink';
const WhyiPhoneSection = () => {
	return (
		<Grid
			className='why-iPhone-section'
			component='section'
			sx={{ width: '100%', textAlign: 'center', pt: { mobile: '50px', tablet: '60px', laptop: '110px' } }}>
			<Typography
				variant='section_headline'
				component='h2'
				sx={{ maxWidth: '83.3333%', mx: 'auto', mb: { mobile: '30px', tablet: '70px' } }}>
				What makes an iPhone an iPhone?
			</Typography>
			<Box
				className='tile-wrapper'
				sx={{
					display: 'flex',
					flexDirection: { mobile: 'column', tablet: 'row' },
					flexWrap: 'wrap',
					width: '100%',
					maxWidth: { tablet: '776px', laptop: '1440px' },
					mx: 'auto',
					p: { mobile: 0, tablet: '0 20px', laptop: '0 30px' }
				}}>
				<Box
					className='tile-ios-14'
					sx={{
						width: { mobile: '100%', tablet: '728px', laptop: '1380px' },
						maxWidth: { mobile: '776px', laptop: '1380px' },
						height: { mobile: '456px', tablet: '350px', laptop: '500px' },
						m: { mobile: '19px 0 15px 0', laptop: '0 0 30px 0' },
						backgroundImage: {
							mobile: 'url(./why_iphone_section/ios14_small_2x.jpg)',
							tablet: 'url(./why_iphone_section/ios14_medium_2x.jpg)',
							laptop: 'url(./why_iphone_section/ios14_large_2x.jpg)'
						},
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center bottom',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					<Box
						className='copy_wrapper'
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							flexBasis: { mobile: '100%', tablet: '41.666668%' },
							height: { mobile: 'auto', tablet: '100%' },
							color: '#fff'
						}}>
						<Typography variant='eyebrow' component='h3'>
							iOS 14
						</Typography>
						<Typography variant='tile_headline' sx={{ mt: '11px' }}>
							Looks brand new.
							<br /> Feels like home.
						</Typography>
						<CustomLink color='#fff'>learn more</CustomLink>
					</Box>
				</Box>

				<Box
					className='Swich-to-iPhone'
					sx={{
						flexBasis: { mobile: '100%', tablet: '50%', laptop: '50%' },
						mb: { mobile: '15px', tablet: '20px', laptop: '30px' },
						pr: { mobile: '0px', tablet: '10px', laptop: '15px' }
					}}>
					<Box
						className='background-wrapper'
						sx={{
							backgroundColor: '#fff',
							width: '100%',
							height: '100%',
							position: 'relative',
							overflow: 'hidden'
						}}>
						<Box
							className='content-wrapper'
							sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
							<Box className='copy-wrapper'>
								<Typography variant='tile_headline' component='h3' sx={{ mt: '62px' }}>
									Switch to iPhone
								</Typography>
								<Typography variant='tile_copy' component='p' sx={{ mt: '13px', color: 'grey.700' }}>
									So many reasons. So incredibly easy.
								</Typography>
								<CustomLink>Learn more</CustomLink>
							</Box>
							<Box
								className='image-wrapper'
								sx={{
									position: 'relative',
									width: '100%',
									mt: { mobile: '26px', tablet: '21px', laptop: '25px' },
									height: { mobile: '285px', tablet: '195px', laptop: '374px' }
								}}>
								<Box
									component='figure'
									className='image-why-switch'
									sx={{
										width: { mobile: '301px', tablet: '236px', laptop: '455px' },
										height: { mobile: '285px', tablet: '195px', laptop: '374px' },
										margin: { mobile: '0 0 0 -150.5px', tablet: '0 0 0 -118px', laptop: '0 0 0 -227.5px' },
										position: 'relative',
										left: '50%',
										backgroundSize: 'cover',
										backgroundRepeat: 'no-repeat',
										backgroundImage: {
											mobile: 'url(./why_iphone_section/switch_to_iphone_small_2x.jpg)',
											tablet: 'url(./why_iphone_section/switch_to_iphone_medium_2x.jpg)',
											laptop: 'url(./why_iphone_section/switch_to_iphone_large_2x.jpg)'
										}
									}}></Box>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					className='Privacy'
					sx={{
						flexBasis: { mobile: '100%', tablet: '50%', laptop: '50%' },
						mb: { mobile: '15px', tablet: '20px', laptop: '30px' },
						pl: { mobile: 0, tablet: '10px', laptop: '15px' }
					}}>
					<Box
						className='background-wrapper'
						sx={{
							backgroundColor: '#fff',
							width: '100%',
							height: '100%',
							position: 'relative',
							overflow: 'hidden',
							pb: { mobile: '160px', tablet: 0 }
						}}>
						<Box
							className='content-wrapper'
							sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
							<Box
								className='image-wrapper'
								sx={{ position: 'relative', mt: { laptop: '116px', tablet: '84px', mobile: '132px' } }}>
								<Box
									component='figure'
									className='Apple-icon'
									sx={{
										width: { mobile: '43px', tablet: '42px', laptop: '63px' },
										height: { mobile: '57px', tablet: '57px', laptop: '85px' },
										margin: { mobile: '0 0 0 -21.5px', tablet: '0 0 0 -21px', laptop: '0 0 0 -31.5px' },
										position: 'relative',
										left: '50%',
										backgroundSize: 'cover',
										backgroundRepeat: 'no-repeat',
										backgroundImage: {
											mobile: 'url(./why_iphone_section/privacy_small_2x.png)',
											tablet: 'url(./why_iphone_section/privacy_medium_2x.png)',
											laptop: 'url(./why_iphone_section/privacy_large_2x.png)'
										}
									}}></Box>
							</Box>
							<Typography variant='tile_headline' component='h3' sx={{ mt: '18px' }}>
								Privacy
							</Typography>
							<Typography variant='tile_copy' component='p' sx={{ mt: '13px', color: 'grey.700' }}>
								what you share should be up to you
							</Typography>
							<CustomLink>Learn more</CustomLink>
						</Box>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

export default WhyiPhoneSection;
