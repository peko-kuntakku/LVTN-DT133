import * as React from 'react';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles'
import { Color } from '../../styles/GlobalStyles';
import { ListItemButton, ListSubheader, Typography } from '@mui/material';
import { Apartment, Description, Discount, Group, Groups, Handyman, Home, NightShelter, RequestPage } from '@mui/icons-material';
import a from '../../App'

interface ListItemLinkProps {
    icon?: React.ReactElement;
    primary: string;
    to: string;
}

interface ListRouterProps {
    open: boolean,
}

const CustomNavLink = styled(NavLink)(({ theme }) => ({
    color: Color.extraText,
    textDecorationLine: 'none',
    "&:hover, &.active": {
        color: Color.primary,
        '& .MuiListItemIcon-root': {
            color: Color.primary,
        },
    }
}));

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;
  return (
    <CustomNavLink to={(to=="dashboard") ? `/dashboard` : `/${to}/list`} >
      <ListItemButton sx={{
        "&:hover": {
            backgroundColor: Color.primaryTransparent,
        },
        marginTop: 1,
        marginBottom: 1,
        marginLeft: 0.5,
        marginRight: 0.5,
        borderRadius: 12
      }}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} primaryTypographyProps={{ sx: { fontWeight: 500 }, }} />
      </ListItemButton>
    </CustomNavLink>
  );
}

export default function ListRouter({ open }: ListRouterProps) {
  return (
    <Paper elevation={0}>
      <ListItemLink to="dashboard" primary="Trang chủ" icon={<Home />} />
      <List
        component="nav"
        sx={{ marginTop: 2 }}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
              {
                  open
                      ? <Typography variant="body2">Quản lý</Typography>
                      :
                      <Divider />
              }
              {/* Quản lý */}
          </ListSubheader>
        }
      >
        <ListItemLink to="building" primary="Toà nhà" icon={<Apartment />} />
        <ListItemLink to="apartment" primary="Căn hộ" icon={<NightShelter />} />
        <ListItemLink to="contract" primary="Hợp đồng" icon={<Description />} />
        <ListItemLink to="invoices" primary="Hóa đơn" icon={<RequestPage />} />
        <ListItemLink to="voucher" primary="Mã giảm giá" icon={<Discount />} />
        <ListItemLink to="customer" primary="Khách hàng" icon={<Groups />} />
        <ListItemLink to="employee" primary="Nhân viên" icon={<Group />} />
        <ListItemLink to="request" primary="Yêu cầu" icon={<Handyman />} />
        <ListItemLink to="request" primary="Điểm danh" icon={<Handyman />} />
      </List>
    </Paper>
  );
}