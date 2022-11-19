import React from 'react';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { Grid, Box, Typography, Button } from '@mui/material';

export const ComponentCardGrade = ({ xs, sm, md,
	bg, bgBtn, sizeW, sizeH, textTitlleTop,
	textTitlleBottom, textBtn, children
}) => {
	const bgButton = bgBtn ? bgBtn : 'black';

	return (
		<Grid
			item
			md={md}
			sm={sm}
			xs={xs}
			sx={{
				maxWidth: sizeW,
				minWidth: '586px',
				maxHeight: sizeH,
				minHeight: sizeH === 586 ? '400px' : '293px',
				bgcolor: bg,
			}}
		>
			<Box
				sx={{
					py: '30px',
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
						maxHeight: '30px',
						minHeight: '20px',
						pb: sizeH === 586 ? '150%' : '50px',
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
