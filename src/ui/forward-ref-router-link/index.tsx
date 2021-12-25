import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const ForwardRefRouterLink = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link {...props} ref={ref} />,
);

ForwardRefRouterLink.displayName = 'ForwardRefRouterLink';
export default ForwardRefRouterLink;
