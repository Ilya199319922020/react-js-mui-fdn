import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { ComponentCardGrade } from '../ContentGrade/ComponentCardGrade/ComponentCardGrade';
import { GridDateValue } from '../../../assets/AuxiliaryComponents/AuxiliaryComponents';
import { ImageContentSearchA } from '../ContentSearch/ImageContentSearch/ImageContentSearch';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const ContentFooter = () => {

	return (
		<>
			<Grid
				container
				md={12}
				sm={12}
				xs={12}
				sx={{
					maxWidth: '1172px',
					maxHeight: '586px',
					px: '375px',
				}}
			>
				<Grid
					container
					md={6}
					sm={12}
					xs={12}
					sx={{
												maxWidth: '586px',
						minWidth: '500px',
						maxHeight: '586px',
						minHeight: '586px',
					}}
				>
					<ComponentCardGrade
						sizeW={293}
						sizeH={586}
						textTitlleTop={'Contemporary Villa'}
						textTitlleBottom={'GOOD HANDS'}
						textBtn={'ABOUT COMPANY'}
						md={6}
						sm={6}
						xs={12}
					>
						Hi mission is to provide the highest level of service for our
						client-partners from concept through highest
						level of service for our client-partners from concept through

						level of service for our client-partners from concept through
					</ComponentCardGrade>
					<Grid
						item
						md={6}
						sm={6}
						xs={12}
						sx={{
							maxWidth: '293px',
							maxHeight: '586px',
							minHeight: '300px',
							bgcolor: '#bababa'
						}}
					>
					</Grid>
				</Grid>
				<Grid
					container
					md={6}
					sm={12}
					xs={12}
					sx={{
						maxWidth: '586px',
						minWidth: '500px',
						maxHeight: '586px',
						minHeight: '586px',
					}}
				>

					<Grid
						container
						md={6}
						sm={12}
						xs={12}
						sx={{
							maxWidth: '293px',
							minWidth: '200px',
							maxHeight: '586px',
							minHeight: '200px',
						}}
					>
						<Grid
							item
							md={12}
							sm={12}
							xs={12}
							sx={{
								maxWidth: '293px',
								minWidth: '200px',
								maxHeight: '293px',
								minHeight: '200px',
								bgcolor: '#bababa'
							}}
						>
						</Grid>
						<GridDateValue
							day={'01'}
							month={'09'}
						/>
					</Grid>
					<Grid
						item
						md={6}
						sm={12}
						xs={12}
						sx={{
							maxWidth: '293px',
							minWidth: '200px',
							maxHeight: '586px',
							minHeight: '586px',
						}}
					>
						<ImageContentSearchA
							bg={'#fbff03'}
							divider={12}
						>
							<SettingsSuggestIcon
								sx={{
									fontSize: '500%',
									textAlign: 'center',
									verticalAlign: 'middle',
								}}
							/>
							<Typography
								color="black"
								sx={{
									fontSize: '14px',
									pt: '10px'
								}}
							>
								WORK WITH US
							</Typography>
						</ImageContentSearchA>
						<Grid
							item
							md={12}
							sm={12}
							xs={12}
							sx={{
								maxWidth: '293px',
								minWidth: '200px',
								maxHeight: '293px',
								minHeight: '293px',
								bgcolor: '#03abff'
							}}
						>
							<Box
								sx={{
									py: '30px',
									px: '20px',
									color: 'white'
								}}
								display="flex"
								flexDirection="column"
								justifyContent={'start'}
							>
								<Typography
									variant="h2"
									sx={{
										fontSize: '25px',
										pb: '20px',
									}}
								>
									SUBSCRIBE
								</Typography>
								<HorizontalRuleIcon
									sx={{
										fontSize: '300%',
										pb: '50px',
									}}
								/>
								<TextField
									sx={{
										p: '0',
										label: {
											color: "#03abff",
										},
										'& .MuiInputBase-input': {
											color: 'white',
											borderColor: 'white',
											bgcolor: 'white',
											height: '15px'
										},
									}}
									label="E-mail"
									variant='filled'
								/>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'end'
									}}
								>
									<Button
										variant="text"
										sx={{
											fontSize: '10px',
											pt: '15px',
											pb: '50px',
											opacity: '0.5',
											textAlign: 'end',
											color: "white",
										}}
									>
										SIGN UP
									</Button>
								</Box>
							</Box>
						</Grid>
					</Grid>

				</Grid>









			</Grid>
		</>
	);
};

export default ContentFooter;