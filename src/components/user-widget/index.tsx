import { User } from 'types/user';
import classes from './styles.module.css';

export interface UserWidgetProps {
  user: User;
}

const UserWidget: React.FC<UserWidgetProps> = ({ user }) => (
  <div className={classes.root}>
    <p>
      Name: <span>{user.name}</span>
    </p>
    <p>
      Email: <span>{user.email}</span>
    </p>
  </div>
);

export default UserWidget;
