import { Button, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const WraperHeader = () => {
	return (
		<>
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
		</>
	);
};

export default WraperHeader;