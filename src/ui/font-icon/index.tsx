import { FC, memo } from 'react';
import { Icon } from '@mui/material';
import { IconProps } from '@mui/material/Icon';

import { FontIconType } from 'types/fontIcons';

export const FontIconComponent: FC<FontIconProps> = ({ type, ...props }) => (
  <Icon {...props}>{type}</Icon>
);

const FontIcon = memo(FontIconComponent);
FontIcon.displayName = 'FontIcon';
export default FontIcon;

export interface FontIconProps extends IconProps {
  type: FontIconType;
}
