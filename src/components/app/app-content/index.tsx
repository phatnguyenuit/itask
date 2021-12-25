import { FC, memo, ReactNode } from 'react';
import { Typography, Breadcrumbs } from '@mui/material';
import clsx from 'clsx';

import { APP_NAME } from 'constants/common';
import useTitle from 'hooks/useTitle';
import Link from 'ui/link';

import useStyles from './styles';

export const AppContentComponent: FC<AppContentProps> = ({
  className,
  title,
  breadcrumbs,
  children,
}) => {
  const classes = useStyles();

  useTitle(`${title} - ${APP_NAME}`);

  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.topBar}>
        <Typography variant="h6">{title}</Typography>
        <div className={classes.grow} />
        {breadcrumbs && (
          <Breadcrumbs className={classes.breadcrumbs}>
            {breadcrumbs.links.map(({ title: name, path }) => (
              <Link className={classes.breadcrumbsLink} key={path} to={path}>
                {name}
              </Link>
            ))}
            <Typography className={classes.breadcrumbsName}>
              {breadcrumbs.title}
            </Typography>
          </Breadcrumbs>
        )}
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const AppContent = memo(AppContentComponent);
AppContent.displayName = 'AppContent';
export default AppContent;

export interface AppContentProps {
  className?: string;
  title: string;
  breadcrumbs?: BreadcrumbsInfo;
  children?: ReactNode;
}

export interface BreadcrumbsInfo {
  title: string;
  links: { title: string; path: string }[];
}
