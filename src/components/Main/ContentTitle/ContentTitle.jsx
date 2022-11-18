import { Grid, Box, } from '@mui/material';
import React from 'react';
import { GridDateValue, GridSize, GridText } from '../../../assets/AuxiliaryComponents/AuxiliaryComponents';
import { arrData } from '../../../assets/data/textData';

const ContentTitle = () => {
	const listItemTextFirst = arrData.partFirst
		.map(element => element.title
			? <GridText
				key={element.id}
				title={element.title}
				text={element.text}
			/>
			: element.sizeText
				? <GridSize
				id={element.id}
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

	const listItemTextThe = arrData.partThe
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
					id={element.id}
				/>
				: <GridDateValue
					key={element.id}
					day={element.day}
					month={element.month}
					md={6}
					sm={6}
					xs={6}
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
				minHeight: '300px',
				// px: '375px',
			}}
		>
			<Grid
				container
				md={6}
				sm={6}
				xs={12}
				sx={{
					maxWidth: '586px',
					minWidth: '350px',
					maxHeight: '586px',
					minHeight: '300px',
				}}
			>
				{
					listItemTextFirst
				}
			</Grid>
			<Grid
				container
				md={6}
				sm={6}
				xs={12}
				sx={{
					maxWidth: '586px',
					minWidth: '350px',
					maxHeight: '586px',
					minHeight: '300px',
				}}
			>
				{
					listItemTextThe
				}
			</Grid>

		</Grid>
	);
};

export default ContentTitle;