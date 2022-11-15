import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export const ComponentNews = () => {
	const elementsHorisontal = [...new Array(3)]
		.map(i => <HorizontalRuleIcon
			key={i}
			sx={{
				fontSize: '150%'
			}}
		/>
		);

	return (
		<Grid
			item
			md={3}
			sm={3}
			xs={3}
			sx={{
				maxWidth: '293px',
				height: '293px',
				bgcolor: '#03abff',
			}}
		>
			<Box
				sx={{
					py: '30px',
					px: '20px',
					color: 'white'
				}}
				display="flex"
				flexDirection="column"
				justifyContent={'start'}
			>
				<Typography
					variant="h4"
					sx={{
						fontSize: '25px',
						pb: '30px'
					}}
				>
					NEWS
				</Typography>
				<Typography
					variant="body"
					sx={{
						fontSize: '12px',
						pb: '7px',
						opacity: '0.5',
					}}
				>
					12 february, 2015
				</Typography>
				<Typography
					variant="body"
					sx={{
						fontSize: '16px',
						pb: '35px'
					}}
				>
					<div>
						Project Design and
					</div>
					<div>
						Engineering Services
					</div>
				</Typography>
				<Typography
					variant="body"
					sx={{
						fontSize: '12px',
						pb: '50px',
						opacity: '0.5',
					}}
				>
					23 commenets
				</Typography>
				<Box
					sx={{
						display: 'flex'
					}}
				>
					{
						elementsHorisontal
					}
				</Box>
			</Box>
		</Grid>
	);
};
