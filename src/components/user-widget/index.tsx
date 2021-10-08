import { User } from 'types/user';
import classes from './styles.module.css';

export interface UserWidgetProps {
  user: User;
}

const UserWidget: React.FC<UserWidgetProps> = ({ user }) => (
  <div className={classes.root}>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
  </div>
);

export default UserWidget;
