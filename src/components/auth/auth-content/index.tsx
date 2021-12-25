import { FC, memo } from 'react';
import useTitle from 'hooks/useTitle';
import { APP_NAME } from 'constants/common';

export const AuthContentComponent: FC<AuthContentProps> = ({
  children,
  title,
}) => {
  useTitle(`${title} - ${APP_NAME}`);
  return <>{children}</>;
};

const AuthContent = memo(AuthContentComponent);
AuthContent.displayName = 'AuthContent';
export default AuthContent;

export interface AuthContentProps {
  children: React.ReactNode;
  title: string;
}
