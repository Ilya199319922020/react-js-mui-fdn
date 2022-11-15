import { Grid, Box, Typography } from "@mui/material";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export const GridText = ({ title, text }) => {
	return (
		<>
			<Grid
				item
				md={3}
				sm={3}
				sx={{
					maxWidth: '293px',
					height: '293px',
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
						{
							title
						}
					</Typography>
					<HorizontalRuleIcon
						sx={{
							fontSize: '150%'
						}}
					/>
					<Typography
						sx={{
							height: '30px',
							pb: '70px'
						}}
					>
						{
							text
						}
					</Typography>
				</Box>


			</Grid>
		</>
	);
};

export const GridSize = ({ sizeText }) => {
	return (
		<>
			<Grid
				item
				md={3}
				sm={3}
				sx={{
					maxWidth: '293px',
					height: '293px',
					bgcolor: '#bababa',
				}}
				container
				direction="column"
				alignItems="center"
				justifyContent={"center"}
			>
				<Typography
					variant="h4"
					sx={{
						fontSize: '35px'
					}}
				>
					{
						sizeText
					}
				</Typography>
			</Grid>
		</>
	);
};

export const GridDateValue = ({ day, month }) => {
	return (
		<>
			<Grid
				item
				md={3}
				sm={3}
				sx={{
					maxWidth: '293px',
					height: '293px',
					bgcolor: '#bababa',
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
						{
							day
						}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontSize: '20px'
						}}
					>
						/{month}
					</Typography>
				</Box>
				<ArrowRightIcon
					sx={{
						color: '#4d4f4f',
						fontSize: '500%'
					}}
				/>
			</Grid>
		</>
	);
};