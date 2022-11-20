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
			sx={{
				maxWidth: '1172px',
				minHeight: '586px',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Grid
				item
				md={6}
				sm={6}
				xs={12}
				sx={{
					maxWidth: '586px',
					minWidth: '586px',
					minHeight: '600px',
				}}
			>
				<ComponentItemNickname
					sizeW={'586px'}
					texTitle={'Martin H.JHonsons'}
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
							minHeight: '20px',
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
								fontSize: '300%'
							}}
						/>
						<HorizontalRuleIcon
							sx={{
								fontSize: '300%',
								color: 'black'
							}}
						/>
					</Box>
				</ComponentItemNickname>
				<Grid
					item
					md={6}
					sm={6}
					xs={12}
					sx={{
						maxWidth: '586px',
						minWidth: '586px',
						minHeight: '293px',
						display: 'flex'
					}}
				>
					<ComponentNews />
					<ComponentItemNickname
						sizeW={'293px'}
						texTitle={'David Mc. Adams'}
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
				</Grid>
			</Grid>
			<Grid
				item
				md={6}
				sm={6}
				xs={12}
				sx={{
					maxWidth: '586px',
					minWidth: '586px',
					minHeight: '586px',
					display: 'flex',
					flexDirection: 'column',
					justifiContent: 'center',
				}}
			>
				<ComponentCardGrade
					bg={'#bababa'}
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
				<Grid
					item
					md={12}
					sm={12}
					xs={6}
					sx={{
						display: 'flex',
						minWidth: '293px',
					}}
				>
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
				</Grid>
				<Grid
					md={12}
					sm={12}
					xs={6}
					sx={{
						minWidth: '586px',
						display: 'flex'
					}}
				>
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
			</Grid>
		</Grid>
	);
};

export default ContentGrade;