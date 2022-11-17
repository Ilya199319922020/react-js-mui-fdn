import { Box, Grid } from '@mui/material';
import React from 'react';
import WraperHeader from './WraperHeader/WraperHeader';
import LowerHeader from './LowerHeader/LowerHeader';
import SiseBarHeader from './SiseBarHeader/SiseBarHeader';
import image from '../../assets/image/Frame1.png';

const Header = () => {

	return (
		<Grid
			container
			sx={{
				maxWidth: '1920px',
				maxHeight: '879px',
			}}
		>
			<Grid
				item
				md={7.8375}
				sm={7.8375}
				xs={7.8375}
				sx={{
					maxWidth: '1254px',
					maxHeight: '879px',
					bgcolor: '#bababa',
				}}
			>
				<Grid
					container
					md={12}
					sm={6}
					xs={6}
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
							pt: '15px'
						}}
					>
						<Box>
							<img
								src={image}
								alt="scene"
							/>
						</Box>
					</Grid>
					<WraperHeader />
					<LowerHeader />
				</Grid>
			</Grid>
			<Grid
				container
				md={4.1625}
				sm={4.1625}
				xs={4.1625}
				sx={{
					maxWidth: '666px',
					minWidth: '600px',
					maxHeight: '879px',
					minHeight: '600px',
				}}
			>
				<Grid
					item
					md={12}
					sm={6}
					xs={6}
					sx={{
						maxWidth: '666px',
						maxHeight: '879px',
						bgcolor: '#232126',
						m: 0,
						pl: 0,
						pt: 0
					}}
				>
					<SiseBarHeader />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Header;