import { memo, FC } from 'react';
import {
  ListItem,
  ListItemText,
  Collapse,
  List,
  useTheme,
  ListItemIcon,
  Tooltip,
} from '@mui/material';
import useToggle from 'hooks/useToggle';
import { LinkInfo } from 'types/common';
import ForwardRefRouterLink from '../forward-ref-router-link';
import FontIcon from '../font-icon';
import useStyles from './styles';

export const NestableLinkItemComponent: FC<NestableLinkItemProps> = ({
  className,
  title,
  path,
  icon,
  nestedLevel,
  pathname,
  childRoutes,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  const [showChildList, toggleShowChildList] = useToggle(false);
  const paddingLeft = `${theme.spacing(3 + 2 * nestedLevel)}px`;

  const listItemContent = (
    <>
      {icon && (
        <ListItemIcon className={classes.iconWrapper}>
          <FontIcon className={classes.icon} type={icon} color="primary" />
        </ListItemIcon>
      )}
      <Tooltip placement="top-start" title={title}>
        <ListItemText className={classes.text} primary={title} />
      </Tooltip>
    </>
  );

  return childRoutes ? (
    <>
      <ListItem
        button
        className={className}
        classes={{
          button: classes.item,
          selected: classes.selectedItem,
        }}
        onClick={toggleShowChildList}
        selected={childRoutes.some(
          (route) => !pathname.localeCompare(route.path),
        )}
        style={{ paddingLeft }}
      >
        {listItemContent}
        {showChildList ? (
          <FontIcon type="expand_less" />
        ) : (
          <FontIcon type="expand_more" />
        )}
      </ListItem>
      <Collapse in={showChildList} timeout="auto">
        <List classes={{ padding: classes.listPadding }}>
          {childRoutes.map((info) => (
            <NestableLinkItemComponent
              {...info}
              key={info.path}
              nestedLevel={nestedLevel + 1}
              pathname={pathname}
            />
          ))}
        </List>
      </Collapse>
    </>
  ) : (
    <ListItem
      button
      className={className}
      classes={{
        button: classes.item,
        selected: classes.selectedItem,
      }}
      component={ForwardRefRouterLink}
      selected={!pathname.localeCompare(path)}
      style={{ paddingLeft }}
      to={path}
    >
      {listItemContent}
    </ListItem>
  );
};

export interface NestableLinkItemProps extends LinkInfo {
  childRoutes?: LinkInfo[];
  className?: string;
  nestedLevel: number;
  pathname: string;
}

const NestableLinkItem = memo(NestableLinkItemComponent);
NestableLinkItem.displayName = 'NestableLinkItem';
export default NestableLinkItem;
