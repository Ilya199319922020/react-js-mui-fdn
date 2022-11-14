import { Box, Grid } from '@mui/material';
import React from 'react';
import CropDinIcon from '@mui/icons-material/CropDin';
import WraperHeader from './WraperHeader/WraperHeader';

const Header = () => {

	return (
		<Grid
			container
			sx={{
				maxWidth: '1920px',
				height: '879px',
			}}
		>
			<Grid
				item
				md={7.8375}
				sm={7.8375}
				xs={7.8375}
				sx={{
					maxWidth: '1254px',
					height: '879px',
					bgcolor: '#bababa',
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
					<Grid
						item
						md={12}
						sm={12}
						sx={{
							maxWidth: '1254px',
							minHeight: '293px',
							maxHeight: '293px',
						}}
					>
						
						<CropDinIcon 
						sx={{
							mt: '15px',
							p: '0',
							height: '83px',
							width: '83px',
						}}
						/>	
					</Grid>
					<WraperHeader/>
					<Grid
						item
						md={8}

						sx={{
							maxWidth: '586px',
							minHeight: '293px',
						}}
					>
					</Grid>
					<Grid
						item md={4}
						sm={12}
						sx={{
							maxWidth: '1254px',
							minHeight: '293px',
							bgcolor: '#03abff',
						}}
					>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				md={4.1625}
				sm={4.1625}
				xs={4.1625}
				sx={{
					maxWidth: '666px',
					height: '879px',
					bgcolor: '#232126',
					m: 0,
					pl: 0,
					pt: 0
				}}
			>
			</Grid>
		</Grid>
	);
};

export default Header;