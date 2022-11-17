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
					maxWidth: '1920px',
					height: '293px',
				}}
			>

				<Grid
					container
					md={6}
					sm={12}
					xs={12}
					sx={{
						maxWidth: '959px',
						maxHeight: '293px',
					}}
				>
					<Grid
						container
						md={12}
						sm={12}
						xs={12}
						sx={{
							paddingLeft: '375px',
							maxWidth: '586px',
							minWidth: '500px',
						}}
					>
						<ImageContentSearchA
							bg={'#fbff03'}

							md={6}
							sm={12}
							xs={12}
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
							md={6}
							sm={12}
							xs={12}
						>
							<Box
								xs={{
									height: "80px",
									width: '20px',
								}}
							>
								<img
									height="100%"
									src={image}
									alt="scene"
									width='100%'
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
					</Grid>
				</Grid>
				<Grid
					item
					md={6}
					sm={6}
					xs={12}
					sx={{
						maxWidth: '961px',
						minWidth: '586px',
						maxHeight: '293px',
						minHeight: '200px',
						bgcolor: '#232126',
						pl: '30px',
					}}
					container
					direction="column"
					alignItems="start"
					justifyContent={"center"}
				>
					<Box
						sx={{
							minWidth: '515px',
						}}
					>
						<TextField
							sx={{
								maxWidth: '515px',
								minWidth: '100%',
								label: {

									color: "#faf9f7",
								},
								'& .MuiInputBase-input': {
									borderColor: "#faf9f7",
									color: "#faf9f7",
								},
								'& ::before': {
									borderColor: "#faf9f7",
								}
							}}
							label="What you're looking for"
							InputProps={{
								endAdornment: (
									<InputAdornment position="start">
										<SearchIcon sx={{ disply: 'flex', alignItems: 'center', color: "#faf9f7", mr: 1 }} />
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