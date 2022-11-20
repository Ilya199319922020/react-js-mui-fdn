import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const LowerHeader = () => {
	return (
		<>
			<Grid
				item
				md={12}
				sm={12}
				xs={12}
				sx={{
					display: 'flex',
					justifyContent: 'end'
				}}
			>
				<Box
					sx={{
						bgcolor: '#03abff',
						minWidth: '293px',
						minHeight: '293px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<div>
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
					</div>
				</Box>
				<Box
					sx={{
						minWidth: '293px',
						minHeight: '293px',
						bgcolor: '#232126',
					}}
				>
				</Box>
			</Grid>
		</>
	);
};

export default LowerHeader;