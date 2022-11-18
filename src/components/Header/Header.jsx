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
			md={12}
			sm={12}
			xs={12}
			sx={{
				maxWidth: '1920px',
				display: 'flex',
				justifyContent: 'center'
			}}
		>
			<Grid
				item
				md={7.8375}
				sm={7.8375}
				xs={7.8375}
				sx={{
					maxWidth: '1254px',
					minHeight: '826px',
					bgcolor: '#bababa',
				}}
			>
				<Grid
					container
					md={12}
					sm={12}
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
							 minHeight: '240px',
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
					minWidth: '550px',
					minHeight: '826px',
				}}
			>
				<Grid
					item
					md={12}
					sm={12}
					xs={6}
					sx={{
						maxWidth: '666px',
						minHeight: '600px',
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