import React from 'react';
import { Grid } from '@mui/material';

export const ImageContentSearchA = ({md, sm,xs , bg, children }) => {
	return (
		<>
			<Grid
				item
				
				md={md}
				sm={sm}
				xs={xs}
				sx={{
					maxWidth: '293px',
					minWidth: '200px',
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
