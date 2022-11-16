import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { ComponentItemNickname } from './ComponentItem/ComponentItem';
import { ComponentCardGrade } from './ComponentCardGrade/ComponentCardGrade';
import { ComponentNews } from './ComponentNews/ComponentNews';
import { ContentIcon } from './ContentIcon/ContentIcon';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import OpacityIcon from '@mui/icons-material/Opacity';
import SettingsIcon from '@mui/icons-material/Settings';
import GradeIcon from '@mui/icons-material/Grade';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import LightbulbIcon from '@mui/icons-material/Lightbulb';


const ContentGrade = () => {
	const elementsGradeIcon = [...new Array(5)].map(h => <GradeIcon
		key={h}
		sx={{
			fontSize: '120%',
			color: '#f2bb07',
		}}
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
				height: '879px',
				px: '375px',
			}}

		>
			<ComponentItemNickname
				sizeW={'586px'}
				text={'Martin H.JHonsons'}
			>
				<Box
					display="flex"
				>
					{
						elementsGradeIcon
					}
				</Box>
				<Typography
					sx={{
						height: '30px',
						pb: '70px',
						pt: '10px',
						textAlign: 'center',
					}}
				>
					Qur mission is to provide the highest level of service for our
					client-partners from concept through highest
					level of service for our client-partners from concept through
				</Typography>
			</ComponentItemNickname>
			<ComponentCardGrade
				bg={'#bababa'}
				divider={6}
				sizeW={586}
				sizeH={293}
				textTitlleTop={'YOUR BULDING IS IN'}
				textTitlleBottom={'GOOD HANDS'}
				textBtn={'ABOUT COMPANY'}
			>
				Qur mission is to provide the highest level of service for our
				client-partners from concept through highest
				level of service for our client-partners from concept through
			</ComponentCardGrade>
			<ComponentItemNickname
				bg={'#d6c19c'}
				sizeW={'586px'}
				texTitle={'Tony SH.Schults'}
			>
				<Box
					display="flex"
				>
					{
						elementsGradeIcon
					}
				</Box>
				<Typography
					sx={{
						height: '30px',
						pb: '70px',
						pt: '10px',
						textAlign: 'center',
					}}
				>
					Qur mission is to provide the highest level of service for our
					client-partners from concept through highest
					level of service for our client-partners from concept through
					level of service for our client-partners from concept through
				</Typography>
				<Box
					sx={{
						display: 'flex'
					}}
				>
					<HorizontalRuleIcon
						sx={{
							fontSize: '150%'
						}}
					/>
					<HorizontalRuleIcon
						sx={{
							fontSize: '150%',
							color: 'black'
						}}
					/>
				</Box>
			</ComponentItemNickname>
			<ContentIcon
				valueNumber={'55 000'}
				textCard={'Expert Witness'}
			>
				<ElectricBoltIcon 
					sx={{
						fontSize: '400%', 
						color: '#03abff',
						bgcolor: '#fbff03'
					}}
				/>
			</ContentIcon>
			<ContentIcon
				valueNumber={'142 600'}
				textCard={'Construction'}
				bg={'#bababa'}
			>
				<OpacityIcon 
					sx={{
						fontSize: '400%', 
						color: '#03abff',
						bgcolor: '#fbff03'
					}}
				/>
			</ContentIcon>
			
			<ComponentNews />
			<ComponentItemNickname
				sizeW={'293px'}
				texTitle={'David Mc. Adams'}
				divider={3}
			>
				<Box
					display="flex"
				>
					{
						elementsGradeIcon
					}
				</Box>
				<Typography
					sx={{
						height: '30px',
						pb: '70px',
						pt: '10px',
						textAlign: 'center',
					}}
				>
					Client-partners from concept through highest
					level of service for our client-partners from concept through
				</Typography>
			</ComponentItemNickname>
			<ContentIcon
				valueNumber={'18 000'}
				textCard={'Procurement'}
				bg={'#bababa'}
			>
				<SettingsIcon 
					sx={{
						fontSize: '400%', 
						color: '#03abff',
						bgcolor: '#fbff03'
					}}
				/>
			</ContentIcon>
			<ContentIcon
				valueNumber={'78 150'}
				textCard={'Projects Managments'}
			>
				<LightbulbIcon 
					sx={{
						fontSize: '400%', 
						color: '#03abff',
						bgcolor: '#fbff03'
					}}
				/>
			</ContentIcon>
		</Grid>
	);
};

export default ContentGrade;