import React from 'react';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Box,  Typography } from '@mui/material';

export const ComponentItemNickname = ({ 
	bg, children, sizeW, texTitle 
}) => {
	
	return (
		<Box
			sx={{
				maxWidth: sizeW,
				minWidth: '293px',
				minHeight: '293px',
				maxHeight: '293px',
				bgcolor: bg,
				display: 'flex',

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
		</Box>
	);
};

