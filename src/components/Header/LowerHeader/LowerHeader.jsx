import { Grid, Typography } from '@mui/material';
import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const LowerHeader = () => {
	return (
		<>
			<Grid
				item
				md={8}
				sx={{
					maxWidth: '586px',
					minWidth: '20px',
					minHeight: '293px',
				}}
			>
			</Grid>
			<Grid
				item 
				md={4}
				sm={12}
				sx={{
					maxWidth: '1254px',
					minWidth: '293px',
					minHeight: '293px',
					bgcolor: '#03abff',
				}}
				container
				direction="column"
				alignItems="center"
				justifyContent={"center"}
			>
				<PlayCircleIcon
					sx={{
						fontSize: '600%',
						textAlign: 'center',
						verticalAlign: 'middle',
					}}
				/>
				<Typography
					color="white"
				>
					COMPANY VIDEO
				</Typography>
			</Grid>
		</>
	);
};

export default LowerHeader;