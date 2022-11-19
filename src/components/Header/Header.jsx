import { Button, Grid, Typography, Box } from '@mui/material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import image from '../../assets/image/Frame1.png';

const Header = () => {
	return (
		<>
			<Grid
				container
				sx={{
					maxWidth: '1172px',
					bgcolor: '#bababa',
					minHeight: '500px',
				}}
			>
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
							pt: '40px',
							border: '0px',
							bgcolor: '#232126',
							minHeight: '293px',
							minWidth: '293px'
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
				</Grid>

				<Grid
					item
					md={12}
					sm={12}
					xs={12}
					sx={{
						maxWidth: '1172px',
						minHeight: '240px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Box
						sx={{
							bgcolor: '#fbff03',
							maxWidth: '586px',
							minWidth: '293px',
							minHeight: '293px',

						}}
					>
						<Box
							sx={{
								px: '30px',
								py: '30px',
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
					</Box>
					<Box
						sx={{
							bgcolor: 'white',
							minWidth: '293px',
							minHeight: '293px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<div>
							<ArrowLeftIcon
								sx={{
									color: '#4d4f4f',
									fontSize: '500%'
								}}
							/>
							<Box
								display={"flex"}						>
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
						</div>
					</Box>
				</Grid>
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
						}}
					>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default Header;


