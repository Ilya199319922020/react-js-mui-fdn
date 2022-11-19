import React from 'react'
import { Box,  Typography } from '@mui/material';

export const ContentIcon = ({ bg, valueNumber, textCard, children }) => {

	return (
		<Box
			sx={{
				maxWidth: '293px',
				minWidth: '293px',
				maxHeight: '293px',
				minHeight: '293px',
				bgcolor: bg,
			}}
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
		</Box>
	);
};

