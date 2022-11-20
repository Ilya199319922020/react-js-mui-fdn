import React from 'react';
import { Box } from '@mui/material';

export const ImageContentSearchA = ({  bg, children }) => {
	return (
		<>
			<Box
				sx={{
					maxWidth: '293px',
					minWidth: '293px',
					minHeight: '293px',
					maxHeight: '293px',
					bgcolor: bg,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				{
					children
				}
			</Box>
		</>
	);
};