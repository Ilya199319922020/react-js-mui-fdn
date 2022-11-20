import React from 'react';
import { Grid } from '@mui/material';
import SiseBarHeader from './SiseBarHeader/SiseBarHeader';
import WraperHeader from './WraperHeader/WraperHeader';
import LowerHeader from './LowerHeader/LowerHeader';

const Header = () => {
	return (
		<>
			<Grid
				container
				sx={{
					maxWidth: '1172px',
					bgcolor: '#bababa',
					minHeight: '500px',
					zIndex: 5
				}}
			>
				<SiseBarHeader />
				<WraperHeader />
				<LowerHeader />
			</Grid>
		</>
	);
};

export default Header;


