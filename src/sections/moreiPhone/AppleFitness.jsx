import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CustomLink from '../accessories/CustomLink';
const AppleFitness = () => {
	return (
		<Box
			className='apple-fitness'
			sx={{
				width: '100%',
				p: { mobile: 0, tablet: '0 10px 0 0  ', laptop: '0 15px 0 0 ' },
				mb: { mobile: '15px', tablet: '20px', laptop: '30px' },
				textAlign: 'center',
				flexBasis: { mobile: '100%', tablet: '50%', laptop: '50%' },
				overflow: 'hidden'
			}}>
			<Box
				className='content-wrapper'
				sx={{
					backgroundColor: '#fff',
					color: '#1d1d1f',
					display: 'flex',
					height: '100%',
					width: '100%',
					flexDirection: 'column',
					justifyContent: 'space-between',
					overflow: 'hidden'
				}}>
				<Box
					className='copy_wrapper'
					sx={{
						flexBasis: { mobile: '75%', tablet: '90%' },
						mx: 'auto',
						maxWidth: { mobile: '75%', tablet: '90%' },
						width: '100%',
						maxHeight: '220px'
					}}>
					<Typography
						component='h2'
						sx={{
							m: { mobile: '45px auto 0 auto', tablet: '45px auto 0 auto', laptop: '68px auto 0 auto' },
							width: { mobile: '146px', tablet: '137px', laptop: '214px' },
							height: { mobile: '28px', tablet: '26px', laptop: '40px' },
							backgroundImage: {
								mobile: 'url(./more_iphone_section/logo_fitness_plus_small_2x.jpg)',
								tablet: 'url(./more_iphone_section/logo_fitness_plus_medium_2x.jpg)',
								laptop: 'url(./more_iphone_section/logo_fitness_plus_large_2x.jpg)'
							},
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}}></Typography>
					<Typography variant='tile_copy' component='p' sx={{ m: '22px auto 0 auto', maxWidth: '340px' }}>
						A fitness experience for everyone.
						<br /> Powered by Apple Watch.
					</Typography>
					<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '20px' }}>
						<CustomLink>try it free</CustomLink>
						<CustomLink>learn more</CustomLink>
					</Box>
				</Box>
				<Box
					className='image-wrapper'
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'flex-end'
					}}>
					<Box
						component='figure'
						className='apple-fitness-image'
						sx={{
							m: { mobile: '50px 0 0 0', tablet: '32px 0 0 0', laptop: '64px 0 0 0' },
							width: { mobile: '534px', tablet: '291px', laptop: '589px' },
							height: { mobile: '244px', tablet: '161px', laptop: '366px' },
							backgroundImage: {
								mobile: 'url(./more_iphone_section/fitness_plus_small_2x.jpg)',
								tablet: 'url(./more_iphone_section/fitness_plus_medium_2x.jpg)',
								laptop: 'url(./more_iphone_section/fitness_plus_large_2x.jpg)'
							},
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat'
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default AppleFitness;
