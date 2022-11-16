import React from 'react';
import { Grid } from '@mui/material';

export const ImageContentSearchA = ({ bg, children, divider }) => {
	return (
		<>
			<Grid
				item
				md={divider}
				sm={divider}
				sx={{
					maxWidth: '293px',
					minHeight: '293px',
					maxHeight: '293px',
					bgcolor: bg,
				}}
				container
				direction="column"
				alignItems="center"
				justifyContent={"center"}
			>

				{
					children
				}

			</Grid>
		</>
	);
};
