import { User } from 'types/user';
import useStyles from './styles';

export interface UserWidgetProps {
  user: User;
}

const UserWidget: React.FC<UserWidgetProps> = ({ user }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>
        Name: <span>{user.name}</span>
      </p>
      <p>
        Email: <span>{user.email}</span>
      </p>
    </div>
  );
};

export default UserWidget;
