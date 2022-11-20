import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DehazeIcon from '@mui/icons-material/Dehaze';
import image from '../../../assets/image/Frame1.png';

const SiseBarHeader = () => {
	return (
		<>
			<Grid
				item
				md={12}
				sm={12}
				xs={12}
				sx={{
					maxWidth: '1172px',
					minWidth: '100px',
					minHeight: '293px',
					display: 'flex',
					justifyContent: 'space-between'

				}}
			>
				<Box
					sx={{
						pt: '15px'
					}}
				>
					<img
						src={image}
						alt="scene"
					/>
				</Box>
				<Box
					display={'flex'}
					direction={"row"}
					alignItems="start"
					justifyContent={"end"}
					variant="text"
					sx={{
						border: '0px',
						bgcolor: '#232126',
						minHeight: '293px',
						minWidth: '293px',
					}}
				>
					<Box
						sx={{
							pt: '15px'
						}}
					>
						<Button						>
							<FacebookIcon
								sx={{
									color: 'white',
									fontSize: '120%'
								}}
							/>
						</Button>
						<Button>
							<TwitterIcon
								sx={{
									color: 'white',
									fontSize: '120%'
								}}
							/>
						</Button>
						<Button>
							<ShoppingCartIcon
								sx={{
									color: 'white',
									fontSize: '120%'
								}}
							/>
						</Button>
						<Button>
							<DehazeIcon
								sx={{
									color: 'white',
									fontSize: '120%'
								}}
							/>
						</Button>
					</Box>
				</Box>
			</Grid>
		</>
	);
};

export default SiseBarHeader;