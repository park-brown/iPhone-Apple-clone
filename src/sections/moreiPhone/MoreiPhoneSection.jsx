import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { BreakLine } from '../retail/RetailSection';
import CustomLink from '../accessories/CustomLink';
const MoreiPhoneSection = () => {
	return (
		<Grid
			component='section'
			className='more-iPhone-section'
			sx={{ width: '100%', overflow: 'hidden', pt: { mobile: '80px', tablet: '72px', laptop: '110px' } }}>
			<Typography
				variant='section_headline'
				component='h2'
				sx={{
					maxWidth: { mobile: '320px', tablet: '83.33333%' },
					mb: { mobile: '42px', tablet: '62px', laptop: '70px' },
					mx: 'auto',
					textAlign: 'center'
				}}>
				Get more out of <BreakLine mobile='show' /> your iPhone.
			</Typography>
			<Box
				className='tile-wrapper'
				sx={{
					display: 'flex',
					width: { mobile: '100%' },
					flexDirection: { mobile: 'column', tablet: 'row' },
					flexWrap: 'wrap',
					p: { mobile: 0, tablet: '0 20px', laptop: '0 30px' },
					margin: { mobile: '0 auto' },
					maxWidth: { tablet: '736px', laptop: '1440px' }
				}}>
				<Box
					className='tile-virtual-session'
					sx={{
						width: '100%',
						m: { mobile: '19px auto 15px auto', tablet: '19px auto 20px auto', laptop: '0 0 30px 0' },
						backgroundColor: '#fff',
						textAlign: 'center',
						flexGrow: 2,
						flexBasis: '100%'
					}}>
					<Box
						className='banner-container'
						sx={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'wrap',
							overflow: 'hidden',
							justifyContent: 'space-between'
						}}>
						<Box
							className='copy_wrapper'
							sx={{
								p: {
									mobile: '63px 0 68px 0',
									tablet: 0,
									laptop: '0 0 0 100px'
								},
								display: 'flex',
								flexShrink: 0,
								flexDirection: 'column',
								flexBasis: { mobile: '100%', tablet: '50%', laptop: '41.66667%' },
								justifyContent: 'center',
								textAlign: 'center'
								// minHeight: '500px'
							}}>
							<Typography variant='eyebrow' component='h2'>
								Today at Apple
							</Typography>
							<Typography variant='tile_headline' component='p' sx={{ mt: { mobile: '7px', tablet: '6px' } }}>
								Virtual Sessions
							</Typography>
							<Typography
								variant='tile_copy'
								component='p'
								sx={{
									maxWidth: { mobile: '260px', laptop: '320px' },
									mx: 'auto',
									mt: { mobile: '13.6px' },
									color: 'grey.700'
								}}>
								Learn the basics of using iPhone live with Apple Creatives.
							</Typography>
							<CustomLink>sign up</CustomLink>
						</Box>
						<Box
							className='image-wrapper'
							sx={{
								display: 'flex',
								justifyContent: 'flex-end',
								overflow: 'hidden',
								flexBasis: { mobile: '100%', tablet: '50%', laptop: '58.33333%' }
							}}>
							<Box
								className='virtual-session-image'
								component='figure'
								sx={{
									m: { mobile: '-18px 0 0 -368px', tablet: '0 0 0 -10px', laptop: '0 0 0 100px' },
									backgroundImage: {
										mobile: 'url(./more_iphone_section/virtual_sessions_small_2x.jpg)',
										tablet: 'url(./more_iphone_section/virtual_sessions_medium_2x.jpg)',
										laptop: 'url(./more_iphone_section/virtual_sessions_large_2x.jpg)'
									},
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									width: { mobile: '736px', tablet: '378px', laptop: '703px' },
									height: { mobile: '214px', tablet: '350px', laptop: '504px' }
								}}></Box>
						</Box>
					</Box>
				</Box>
				<Box
					className='tile_apple_one'
					sx={{
						width: '100%',
						m: { mobile: '0 auto 15px auto', tablet: '0 auto 20px auto', laptop: '0 0 30px 0' },
						backgroundColor: '#fff',
						textAlign: 'center',
						flexGrow: 2,
						flexBasis: '100%'
					}}>
					<Box
						className='apple_one_content'
						sx={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'wrap',
							overflow: 'hidden',
							justifyContent: 'space-between'
						}}>
						<Box
							className='copy_wrapper'
							sx={{
								display: 'flex',
								flexShrink: 0,
								flexDirection: 'column',
								flexBasis: { mobile: '100%', tablet: '50%', laptop: '41.66667%' },
								justifyContent: 'center',
								alignItems: 'center',
								textAlign: 'center',
								order: { mobile: 1, tablet: 2 },
								mt: { mobile: '50px', tablet: 0 }
							}}>
							<Typography
								variant='eyebrow'
								component='h2'
								sx={{
									m: { mobile: 0 },
									backgroundImage: {
										mobile: 'url(./more_iphone_section/apple_one_logo_small_2x.jpg)',
										tablet: 'url(./more_iphone_section/apple_one_logo_medium_2x.jpg)',
										laptop: 'url(./more_iphone_section/apple_one_logo_large_2x.jpg)'
									},
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									width: { mobile: '84px', tablet: '184px', laptop: '317px' },
									height: { mobile: '28px', tablet: '59px', laptop: '100px' }
								}}></Typography>
							<Typography
								variant='eyebrow'
								component='p'
								sx={{
									m: { mobile: '25px 0 15px 0', tablet: '20px 0 15px 0', laptop: '30px 0 25px 0' },
									maxWidth: { mobile: '315px', tablet: '264px', laptop: '420px' }
								}}>
								Bundle up to six Apple services. And enjoy more for less.
							</Typography>
							<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }}>
								<CustomLink>try it free</CustomLink>
								<CustomLink>learn more</CustomLink>
							</Box>
						</Box>
						<Box
							className='image_wrapper'
							sx={{
								display: 'flex',
								justifyContent: 'center',
								overflow: 'hidden',
								m: { mobile: '50px 0', tablet: '86px 0 70px', laptop: '150px 0 130px 0' },
								p: { mobile: 0, tablet: 0, laptop: 0 },
								flexBasis: { mobile: '100%', tablet: '50%', laptop: '58.33333%' },
								order: { mobile: 2, tablet: 1 }
							}}>
							<Box
								className='apple-one-image'
								component='figure'
								sx={{
									m: { mobile: '0 0 0 30px', tablet: '0 -50px 0 0', laptop: 0 },
									backgroundImage: {
										mobile: 'url(./more_iphone_section/apple_one_small_2x.jpg)',
										tablet: 'url(./more_iphone_section/apple_one_medium_2x.jpg)',
										laptop: 'url(./more_iphone_section/apple_one_large_2x.jpg)'
									},
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									width: { mobile: '297px', tablet: '313px', laptop: '542px' },
									height: { mobile: '181px', tablet: '191px', laptop: '329px' }
								}}></Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

export default MoreiPhoneSection;
