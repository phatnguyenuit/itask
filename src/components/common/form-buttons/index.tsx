import { FC, memo, ReactNode, MouseEventHandler } from 'react';
import { Button } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';
import clsx from 'clsx';
import useStyles from './styles';

export const FormButtonsComponent: FC<FormButtonsProps> = ({
  className,
  onClickReset,
  onClickSubmit,
  resetButtonClassName,
  resetButtonProps,
  resetButtonType = 'reset',
  resetColor = 'inherit',
  resetLabel = 'Reset',
  submitButtonClassName,
  submitButtonProps,
  submitButtonType = 'submit',
  submitColor = 'primary',
  submitLabel = 'Submit',
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Button
        fullWidth
        className={submitButtonClassName}
        color={submitColor}
        onClick={onClickSubmit}
        type={submitButtonType}
        variant="contained"
        {...submitButtonProps}
      >
        {submitLabel}
      </Button>
      <Button
        fullWidth
        className={resetButtonClassName}
        color={resetColor}
        onClick={onClickReset}
        type={resetButtonType}
        variant="contained"
        {...resetButtonProps}
      >
        {resetLabel}
      </Button>
    </div>
  );
};

const FormButtons = memo(FormButtonsComponent);
FormButtons.displayName = 'FormButtons';
export default FormButtons;

export interface FormButtonsProps {
  className?: string;
  onClickReset?: MouseEventHandler;
  onClickSubmit?: MouseEventHandler;
  resetButtonClassName?: string;
  resetButtonProps?: ButtonProps;
  resetButtonType?: ButtonProps['type'];
  resetColor?: ButtonProps['color'];
  resetLabel?: ReactNode;
  submitButtonClassName?: string;
  submitButtonProps?: ButtonProps;
  submitButtonType?: ButtonProps['type'];
  submitColor?: ButtonProps['color'];
  submitLabel?: ReactNode;
}
