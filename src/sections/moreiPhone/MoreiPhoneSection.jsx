import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { BreakLine } from '../retail/RetailSection';
import VirtualSession from './VirtualSession';
import AppleMusic from './AppleMusic';
import AppleTV from './AppleTV';
import AppleOne from './AppleOne';
import AppleNews from './AppleNews';
import AppleArcade from './AppleArcade';
import AppleFitness from './AppleFitness';
import AppleGiftCard from './AppleGiftCard';
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
				<VirtualSession />
				<AppleOne />
				<AppleTV />
				<AppleMusic />
				<AppleNews />
				<AppleArcade />
				<AppleFitness />
				<AppleGiftCard />
			</Box>
		</Grid>
	);
};

export default MoreiPhoneSection;
