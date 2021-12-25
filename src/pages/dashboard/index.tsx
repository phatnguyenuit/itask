import { Grid, Typography } from '@mui/material';
import AppContent from 'components/app/app-content';
import useStyles from './styles';

const DashboardPage: React.FC = () => {
  const classes = useStyles();

  return (
    <AppContent title="Giới thiệu">
      <Grid container className={classes.root}>
        <Grid item>
          <Typography variant="h6">1. Thông tin khóa luận</Typography>
          <Typography variant="body1" className={classes.text}>
            - Tên đề tài: XÂY DỰNG WEBSITE VẬN HÀNH CHUNG CƯ
          </Typography>
          <Typography variant="body1" className={classes.text}>
            - Tên đề tài(Tiếng Anh): BUILDING WEBSITE TO OPERATE APARTMENT
          </Typography>
          <Typography variant="body1" className={classes.text}>
            - Cán bộ hướng dẫn: ThS. Mai Xuân Hùng
          </Typography>
          <Typography variant="body1" className={classes.text}>
            - Sinh viên thực hiện: Nguyễn Tấn Tài - 17520999
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">2. Các tính năng</Typography>
          <Typography variant="body1" className={classes.text}>
            - Quản lý thông tin các căn hộ và các phản ánh
          </Typography>
          <Typography variant="body1" className={classes.text}>
            - Quản lý tài chính: phiếu thu và phiếu chi
          </Typography>
          <Typography variant="body1" className={classes.text}>
            - Quản lý bảng phí và các dịch vụ chung cư: tổ chức sự kiện, gửi xe
          </Typography>
          <Typography variant="body1" className={classes.text}>
            - Quản lý nhân viên: thông tin nhân viên các bộ phận, phân công
            nhiệm vụ, đơn nghỉ phép
          </Typography>
          <Typography variant="body1" className={classes.text}>
            - Quản lý kỹ thuật: danh sách thiết bị, bố trí, bảo trì, chỉ số
            nước, sửa chữa căn hộ
          </Typography>
          <Typography variant="body1" className={classes.text}>
            - Quản lý các thông báo từ Ban quản lý và Ban quản trị
          </Typography>
          <Typography variant="body1" className={classes.text}>
            - Quản lý tài khoản: thông tin tài khoản và phân quyền
          </Typography>
        </Grid>
      </Grid>
    </AppContent>
  );
};

export default DashboardPage;
