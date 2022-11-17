import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';

const Footer = () => {
	const [active, setActive] = useState(null);

	const handleActiveCard = (index) => {
		setActive(active => active === index ? null : index);
	};

	const listMenuBtn = [
		'Service', 'Our Works', 'News & events', 'Work with us', 'F.A.Q', 'Contact us'
	];

	return (
		<Grid
			container
			md={12}
			sm={12}
			xs={12}
			sx={{
				maxWidth: '1172px',
				minHeight: '40px',
				maxHeight: '40px',
				px: '375px',
			}}

		>
			<Grid
				item
				md={5}
				sm={12}
				xs={12}
				sx={{
					maxWidth: '350px',
					minWidth: '350px',
					maxHeight: '80px',
					fontSize: '10px'
				}}
				display='flex'
				alignItems='center'
			>
				<Typography
					sx={{
						fontSize: '10px',
						pr: '5px'
					}}
				>
					2015 @ Copyrigth - Foundation theme by
				</Typography>
				<Typography
					sx={{
						fontSize: '10px',
						color: '#03abff',
					}}
				>
					Stylemixthemes
				</Typography>
			</Grid>
			<Grid
				item
				md={7}
				sm={12}
				xs={12}
				sx={{
					maxWidth: '550px',
					minWidth: '600px',
					maxHeight: '80px',
				}}
				display='flex'
				alignItems='center'
				justifyContent={'end'}
			>
				{
					listMenuBtn.map(j => <Button
						key={j}
						onClick={() => handleActiveCard(j)}
						variant="text"
						sx={{
							height: '20px',
							width: '70px',
							color: active === j ? '#03abff' : '#b3b0a8',
							fontSize: '6px',
							"&:active": {
								color: '#03abff'
							}
						}}
					>
						{j}
					</Button>
					)
				}
			</Grid>
		</Grid>
	);
};

export default Footer;