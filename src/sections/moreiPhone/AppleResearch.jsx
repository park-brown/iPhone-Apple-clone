import React from 'react';
import { Box, Typography } from '@material-ui/core';

import CustomLink from '../accessories/CustomLink';
const AppleResearch = () => {
	return (
		<>
			<Box
				className='tile-apple-research'
				sx={{
					width: '100%',
					m: { mobile: '0 auto 15px auto', tablet: '0 auto 20px auto', laptop: '0 0 30px 0' },
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
						justifyContent: 'space-between',
						p: { mobile: '28px 0 0 0', tablet: '81px 0 0 0', laptop: '81px 0 0 0' }
					}}>
					<Box
						className='copy_wrapper'
						sx={{
							m: { mobile: '16px 0 0 0', tabelt: '30px 0 0 0', laptop: '6px 0 0 0 ' },
							display: 'flex',
							flexShrink: 0,
							flexDirection: 'column',
							flexBasis: { mobile: '100%', tablet: '50%', laptop: '41.66667%' },
							justifyContent: 'center',
							textAlign: 'center',
							p: { laptop: '0 32px 0 0' }
						}}>
						<Typography variant='tile_headline' component='p' sx={{ mt: { mobile: '7px', tablet: '6px' } }}>
							Introducing <br /> the Apple <br />
							Research app
						</Typography>
						<Typography
							variant='tile_copy'
							component='p'
							sx={{
								mx: 'auto',
								mt: { mobile: '13.6px' },
								color: 'grey.700'
							}}>
							The future of health of health research is you
						</Typography>
						<CustomLink>Learn more</CustomLink>
					</Box>
					<Box
						className='image-wrapper'
						sx={{
							display: 'flex',
							justifyContent: 'center',
							overflow: 'hidden',
							flexBasis: { mobile: '100%', tablet: '50%', laptop: '58.33333%' }
						}}>
						<Box
							className='apple-research-image'
							component='figure'
							sx={{
								m: { mobile: '28px 0 0 0', tablet: '0 auto', laptop: 0 },
								backgroundImage: {
									mobile: 'url(./more_iphone_section/apple_research_small_2x.jpg)',
									tablet: 'url(./more_iphone_section/apple_research_medium_2x.jpg)',
									laptop: 'url(./more_iphone_section/apple_research_large_2x.jpg)'
								},
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								width: { mobile: '277px', tablet: '285px', laptop: '766px' },
								height: { mobile: '305px', tablet: '312px', laptop: '388px' }
							}}></Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default AppleResearch;
