/* eslint-disable react/no-unescaped-entities */
import { FC, memo } from 'react';
import { Typography, Button } from '@mui/material';

import { appPaths } from 'routes/paths';
import ForwardRefRouterLink from 'ui/forward-ref-router-link';
import notFoundImg from 'assets/images/not_found.svg';

import useStyles from './styles';

export const NotFoundComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <img className={classes.logo} src={notFoundImg} alt="notfound" />
        <Typography variant="h6">Nội dung không tồn tại.</Typography>
        <Typography variant="body2" className={classes.subtitle}>
          Trang bạn yêu cầu không tìm thấy hoặc bạn không có quyền để xem trang
          này.
        </Typography>
        <Button
          className={classes.homeButton}
          variant="contained"
          color="primary"
          component={ForwardRefRouterLink}
          to={appPaths.dashboard().path}
        >
          Trở lại
        </Button>
      </div>
    </div>
  );
};

const NotFound = memo(NotFoundComponent);
NotFound.displayName = 'NotFound';
export default NotFound;
