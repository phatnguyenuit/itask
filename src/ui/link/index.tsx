import { FC, memo } from 'react';
import { LinkProps as RouterLinkProps } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { LinkProps as MuiLinkProps } from '@mui/material/Link';

import ForwardRefRouterLink from '../forward-ref-router-link';

export const LinkComponent: FC<LinkProps> = (props) => (
  <MuiLink {...props} component={ForwardRefRouterLink} />
);

const Link = memo(LinkComponent);
Link.displayName = 'Link';
export default Link;

export type LinkProps = RouterLinkProps & MuiLinkProps;
