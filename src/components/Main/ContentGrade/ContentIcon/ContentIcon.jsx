import React from 'react'
import { Box, Grid, Typography } from '@mui/material';

export const ContentIcon = ({ bg, valueNumber, textCard, children }) => {

	return (
		<Grid
			item
			md={6}
			sm={6}
			xs={6}
			sx={{
				maxWidth: '293px',
				maxHeight: '293px',
				minHeight: '293px',
				bgcolor: bg,
			}}
			container
			direction="column"

		>
			<Box
				sx={{
					py: '40px',
					px: '40px',
				}}
				display="flex"
				flexDirection="column"
				alignItems={'start'}
			>
				{
					children
				}
				<Typography
					variant="h4"
					sx={{
						fontSize: '35px',
						pt: '18px',
						color: '#61605e'
					}}
				>
					{
						valueNumber
					}
				</Typography>
				<Typography
					variant="body"
					sx={{
						fontSize: '14px',
						pt: '10px',
						color: '#61605e'
					}}
				>
					{
						textCard
					}
				</Typography>
			</Box>
		</Grid>
	);
};

