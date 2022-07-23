import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

// import Markdown from './Markdown';

function Main(props) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {"Wayanad Muslim Orphanage"}
      </Typography>
      <Divider />
      <Typography variant="body1" gutterBottom>
      It was like carving life out of solid, hard and tough realities. When Wayanad was soaked in the tears of poverty and disease, a group of people ventured to wipe them out. Their sole inspiration was the dedication and vision of Abdul Rahman Bafaqui Thangal. That was how, with an aim to bring the poor, ill and abandoned lives up to the light of life and hope, Wayanad Muslim Orphanage was built in 1967.
First, it was the shelter of a few orphans in Wayanad. And as four and a half decades sped past, WMO had already spread out its branches of care and love into an educational, social, entrepreneurial mission: riding on the course of contenting, yet unfulfilled mission. Beside the orphanage and hostel complex, WMO runs three colleges, Islamic educational institutions, schools, vocational enterprises etc. Ventures like dairy farm were started with a wider objective: the objective of reforming the traditional agricultural sector for the larger benefit of the agrarian economy of Wayanad. To all these initiatives has to be added the programs and ventures which reflect the WMO’s social commitment.
      </Typography>
      <Link underline="hover" href="/about">
             continue ...
        </Link>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;