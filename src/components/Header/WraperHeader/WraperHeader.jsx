import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Box } from '@mui/system';

const WraperHeader = () => {
	return (
		<>
			<Grid
				item
				md={8}
				sm={12}
				xs={12}
				sx={{
					maxWidth: '586px',
					minWidth: '293px',
					minHeight: '293px',
					bgcolor: '#fbff03',
				}}
			>
				<Box
					sx={{
						py: '40px',
						px: '30px',
					}}
				>
					<Typography
						variant="h4"
						sx={{
							fontSize: '25px'
						}}
					>
						BULDING THE WORLD
						<div>
							AROUND US
						</div>
					</Typography>
					<HorizontalRuleIcon
						sx={{
							fontSize: '150%'
						}}
					/>
					<Typography
						sx={{
							maxHeight: '30px',
							pb: '70px'
						}}
					>
						Still other clients have reserved for capital improvement projects and will work directly with our Design and Engineering team.
					</Typography>
					<Button
						variant="contained"
						color="primary"
						sx={{
							backgroundColor: 'black',
							color: 'white'
						}}
					>
						READ MODE
					</Button>
				</Box>
			</Grid>
			<Grid
				item
				md={4}
				sm={4}
				xs={4}
				sx={{
					maxWidth: '1254px',
					minHeight: '20px',
				}}
			>
			</Grid>
		</>
	);
};

export default WraperHeader;