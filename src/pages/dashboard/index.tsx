import { Grid } from '@mui/material';
import AppContent from 'components/app/app-content';
import useStyles from './styles';

const DashboardPage: React.FC = () => {
  const classes = useStyles();

  return (
    <AppContent title="Dashboard">
      <Grid container className={classes.root} />
    </AppContent>
  );
};

export default DashboardPage;
