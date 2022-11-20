import React from 'react';
import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { ImageContentSearchA } from './ImageContentSearch/ImageContentSearch';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SearchIcon from '@mui/icons-material/Search';
import image from '../../../assets/image/Frame2.png'

const ContentSearch = () => {
	return (
		<>
			<Grid
				container
				md={12}
				sm={12}
				xs={12}
				sx={{
					maxWidth: '1172px',
					display: 'flex',
					justifyContent: 'center',
								}}
			>
				<ImageContentSearchA
					bg={'#fbff03'}
				>
					<PictureAsPdfIcon
						sx={{
							fontSize: '500%',
							textAlign: 'center',
							verticalAlign: 'middle',
						}}
					/>
					<Typography
						color="black"
						sx={{
							fontSize: '14px',
							pt: '10px'
						}}
					>
						DOWNLOAD PRICE
					</Typography>
				</ImageContentSearchA>
				<ImageContentSearchA
					bg={'#03abff'}
				>
					<Box
						xs={{
							height: "80px",
							width: '20px',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<img
							src={image}
							alt="scene"
						/>
					</Box>
					<Typography
						color="black"
						sx={{
							fontSize: '14px',
							pt: '10px'
						}}
					>
						CONTACT US
					</Typography>
				</ImageContentSearchA>
				<Grid
					item
					md={6}
					sm={6}
					xs={12}
					sx={{
						maxWidth: '586px',
						minWidth: '586px',
						minHeight: '293px',
						bgcolor: '#232126',
					}}
					container
					direction="column"
					alignItems="start"
					justifyContent={"center"}
				>
					<Box
						sx={{
							minWidth: '515px',
							position: 'relative',
							pl: '30px',
						}}
					>
						<TextField
							sx={{
								maxWidth: '515px',
								minWidth: '100%',
								'& :before': {
									borderColor: "#faf9f7",
								},
								label: {
									color: "#faf9f7",
								},
							}}
							label="What you're looking for"
							InputProps={{
								endAdornment: (
									<InputAdornment position="start">
										<SearchIcon sx={{ display: 'flex', alignItems: 'center', color: "#faf9f7", mr: 1 }} />
									</InputAdornment>
								),
							}}
							variant="standard"
						/>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default ContentSearch;