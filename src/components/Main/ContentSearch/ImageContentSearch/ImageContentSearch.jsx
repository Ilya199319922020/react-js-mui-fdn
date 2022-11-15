import React from 'react';
import { Grid} from '@mui/material';

export const ImageContentSearchA = ({bg, children}) => {
  return (
	 <>
	 	<Grid
			item
			md={6}
			sm={6}
			sx={{
				maxWidth: '293px',
				minHeight: '293px',
				maxHeight: '293px',
				bgcolor: bg,
			}}
			container
				direction="column"
				alignItems="center"
				justifyContent={"center"}
		>

				{
					children
				}

		</Grid>
	 </>
  );
};
