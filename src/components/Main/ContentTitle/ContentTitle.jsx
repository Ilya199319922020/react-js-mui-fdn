import { Grid, Box, } from '@mui/material';
import React from 'react';
import { GridDateValue, GridSize, GridText } from '../../../assets/AuxiliaryComponents/AuxiliaryComponents';
import { arrData } from '../../../assets/data/textData';

const ContentTitle = () => {
	const listItemText = arrData
		.map(element => element.title
			? <GridText
				key={element.id}
				title={element.title}
				text={element.text}
			/>
			: element.sizeText
				? <GridSize
					key={element.id}
					sizeText={element.sizeText}
				/>
				: <GridDateValue
					key={element.id}
					day={element.day}
					month={element.month}
					divider={3}
					bg={'#bababa'}
				/>
		);

	return (
		<Grid
			container
			md={12}
			sm={12}
			xs={12}
			sx={{
				maxWidth: '1172px',
				maxHeight: '586px',
				minHeight: '300px',
				px: '375px',
			}}
		>
			{
				listItemText
			}
		</Grid>
	);
};

export default ContentTitle;