import { FC, memo, ReactNode, MouseEventHandler } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  DialogProps,
} from '@mui/material';
import clsx from 'clsx';
import FormButtons from 'components/common/form-buttons';
import useStyles from './styles';

export const ConfirmationDialogComponent: FC<ConfirmationDialogProps> = ({
  children,
  className,
  classes: outerClasses,
  cancelText = 'Cancel',
  confirmText = 'OK',
  heading,
  onCancel,
  onConfirm,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Dialog
      {...props}
      classes={{ paper: clsx(classes.root, className), ...outerClasses }}
    >
      {heading && (
        <DialogTitle className={classes.title}>
          <Typography
            className={classes.titleText}
            color="secondary"
            variant="h5"
          >
            {heading}
          </Typography>
        </DialogTitle>
      )}
      <DialogContent className={classes.content}>{children}</DialogContent>
      <DialogActions className={classes.actions}>
        <FormButtons
          className={classes.formButtons}
          onClickReset={onCancel}
          onClickSubmit={onConfirm}
          resetColor="secondary"
          submitColor="primary"
          resetLabel={cancelText}
          submitLabel={confirmText}
          submitButtonProps={{
            variant: 'outlined',
          }}
          resetButtonProps={{
            variant: 'outlined',
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

const ConfirmationDialog = memo(ConfirmationDialogComponent);
ConfirmationDialog.displayName = 'ConfirmationDialog';
export default ConfirmationDialog;

export interface ConfirmationDialogProps extends DialogProps {
  cancelText?: ReactNode;
  children: ReactNode;
  confirmText?: ReactNode;
  heading?: ReactNode;
  onCancel?: MouseEventHandler;
  onConfirm?: MouseEventHandler;
}
