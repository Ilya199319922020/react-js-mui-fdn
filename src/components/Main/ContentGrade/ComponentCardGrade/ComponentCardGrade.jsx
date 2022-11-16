import React from 'react';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Grid, Box, Typography, Button } from '@mui/material';

export const ComponentCardGrade = ({ xs, sm, md,
	bg, bgBtn, sizeW, sizeH, textTitlleTop,
	textTitlleBottom, textBtn, children
}) => {
	const bgButton = bgBtn ? bgBtn : 'black'

	return (
		<Grid
			item
			md={md}
			sm={sm}
			xs={xs}
			sx={{
				maxWidth: sizeW,
				height: sizeH,
				bgcolor: bg,
			}}
		>
			<Box
				sx={{
					py: '40px',
					px: '30px',
				}}
			>
				<Typography
					variant="h4"
					sx={{
						fontSize: '25px',

					}}
				>
					{
						textTitlleTop
					}
					<div>
						{
							textTitlleBottom
						}
					</div>
				</Typography>
				<HorizontalRuleIcon
					sx={{
						fontSize: '150%'
					}}
				/>
				<Typography
					sx={{
						height: '30px',
						pb: sizeH >= 586 ? '150%' : '70px',
					}}
				>
					{
						children
					}
				</Typography>
				<Button
					variant="contained"
					color="primary"
					sx={{
						backgroundColor: bgButton,
						color: 'white'
					}}
				>
					{
						textBtn
					}
				</Button>
			</Box>
		</Grid>
	);
};
