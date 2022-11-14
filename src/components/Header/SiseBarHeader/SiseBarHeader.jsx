import React from 'react';
import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const SiseBarHeader = () => {
	return (
		<>
			<Grid
				container
				md={12}
				sm={12}
				xs={12}
				sx={{
					pr: '80px'
				}}
			>
				<Grid
					item
					md={6}
					sx={{
						maxWidth: '293px',
						height: '293px',
					}}
				>
					<Box
						display={'flex'}
						direction={"row"}
						alignItems="center"
						justifyContent={"end"}
						variant="text"
						sx={{
							pt: '40px',
							border: '0px',
							bgcolor: '#232126'
						}}
					>
						<Button
							sx={{
								p: '0px'
							}}
						>
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
				</Grid>
				<Grid
					item
					md={6}
					sx={{
						width: '293px',
						height: '293px',
						maxHeight: '293px',
					}}
				>
				</Grid>
				<Grid
					item
					md={6}
					sx={{
						backgroundColor: 'white',
						maxWidth: '293px',
						height: '293px',
						maxHeight: '293px',
					}}
					container
					direction="column"
					alignItems="center"
					justifyContent={"center"}
				>
					<ArrowLeftIcon
						sx={{
							color: '#4d4f4f',
							fontSize: '500%'
						}}
					/>
					<Box
						display={"flex"}
					>
						<Typography
							variant="h4"
							sx={{
								fontSize: '35px'
							}}
						>
							01
						</Typography>
						<Typography
							variant="body1"
							sx={{								
								fontSize: '20px'
							}}
						>
							/03
						</Typography>
					</Box>
					<ArrowRightIcon
						sx={{
							color: '#4d4f4f',
							fontSize: '500%'
						}}
					/>
				</Grid>
				<Grid
					item
					md={12}
				>
				</Grid>
			</Grid>
		</>
	);
};

export default SiseBarHeader;