import { Grid, Box, Typography } from "@mui/material";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import icon from '../../assets/image/Polygon2.png';

export const GridText = ({ title, text }) => {
	return (
		<>
			<Grid
				item
				md={6}
				sm={6}
				xs={6}
				sx={{
					maxWidth: '293px',
					minHeight: '293px',
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

export const GridSize = ({ sizeText, id }) => {
	return (
		<>
			<Grid
				item
				md={6}
				sm={6}
				xs={6}
				sx={{
					maxWidth: '293px',
					minHeight: '293px',
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
						fontSize: '35px',
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

export const GridDateValue = ({ day, month, bg, md, sm, xs }) => {

	return (
		<>
			<Grid
				item
				md={md}
				sm={sm}
				xs={xs}
				sx={{
					maxWidth: '293px',
					minWidth: '293px',
					minHeight: '293px',
					bgcolor: bg,
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