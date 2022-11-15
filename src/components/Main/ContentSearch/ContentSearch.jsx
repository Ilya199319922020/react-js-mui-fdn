import {  Grid, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import { ImageContentSearchA } from './ImageContentSearch/ImageContentSearch';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CircleIcon from '@mui/icons-material/Circle';
import SearchIcon from '@mui/icons-material/Search';

const ContentSearch = () => {
	return (
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
				item
				md={6}
				sm={3.6625}
				xs={3.6625}
				sx={{
					maxWidth: '961px',
					height: '293px',

				}}
			>
				<Grid
					container
					md={12}
					sm={12}
					xs={12}
					sx={{
						paddingLeft: '375px',

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
						<CircleIcon
							sx={{
								fontSize: '500%',

							}}
						/>
						<ArrowDropDownIcon
							sx={{
								fontSize: '500%',
								color: 'white',
							}}
						/>
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
				xs={6}
				sx={{
					maxWidth: '961px',
					height: '293px',
					bgcolor: '#232126',
					pl: '30px',
				}}
				container
				direction="column"
				alignItems="start"
				justifyContent={"center"}
			>
				<TextField
					sx={{
												label: {
							color: "#faf9f7",
						}
					}}
					label="TextField"
					InputProps={{
						endAdornment: (
							<InputAdornment position="start">
								<SearchIcon sx={{ color: "#faf9f7", mr: 1, my: 0.5 }} />
							</InputAdornment>
						),
					}}
					variant="standard"
				/>
			</Grid>
		</Grid>
	);
};

export default ContentSearch;