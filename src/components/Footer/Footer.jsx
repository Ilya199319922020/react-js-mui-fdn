import React, { useState } from 'react';
import {  Button, Grid, Typography } from '@mui/material';

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
			sx={{
				maxWidth: '1172px',
				 minHeight: '40px',
			}}
		>
			<Grid
				item
				md={6}
				sm={12}
				xs={12}
				sx={{
					maxWidth: '350px',
					minWidth: '300px',
					minHeight: '40px',
					fontSize: '10px'
				}}
				display='flex'
				alignItems='center'
			>
				<Typography
					sx={{
						fontSize: '10px',
						px: '5px'
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
				md={6}
				sm={12}
				xs={12}
				sx={{
					maxWidth: '550px',
					minWidth: '450px',
					minHeight: '40px',
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
							minHeight: '20px',
							maxWidth: '70px',
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