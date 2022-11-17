import React from 'react';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Box, Grid, Typography } from '@mui/material';

export const ComponentItemNickname = ({ 
	bg, children, sizeW, texTitle, divider 
}) => {
	const denominator = divider ? divider : 6;
	
	return (
		<Grid
			item
			md={denominator}
			sm={denominator}
			xs={denominator}
			sx={{
				maxWidth: sizeW,
				height: '293px',
				bgcolor: bg
			}}
			container
			direction="column"
			alignItems="center"
			justifyContent={"center"}
		>
			<Box
				sx={{
					py: '40px',
					px: '30px',
				}}
				display="flex"
				flexDirection="column"
				alignItems={'center'}
			>
				<CropOriginalIcon
					sx={{
						fontSize: '400%'
					}}
				/>
				<Typography
					variant="h4"
					sx={{
						fontSize: '25px',
						pb: '10px'
					}}
				>
					{
						texTitle
					}
				</Typography>
				{
					children
				}
			</Box>
		</Grid>
	);
};

