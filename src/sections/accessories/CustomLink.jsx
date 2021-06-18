import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const CustomLink = (props) => {
	const { children, color } = props;
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: color ? color : 'common.link',
				mt: { mobile: '13px' }
			}}>
			<Typography variant='body_reduced'>{children}</Typography>
			<ArrowForwardIosIcon sx={{ width: '10px', height: '16px', ml: '6px' }} />
		</Box>
	);
};

export default CustomLink;
