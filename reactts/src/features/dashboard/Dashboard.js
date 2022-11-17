import React,{ useEffect, useState } from 'react';
import Chart from "chart.js/auto";
import { loadItem, deleteItem, loadLocation } from '../../control';
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import Box, { BoxProps } from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import {Stack} from "@mui/material";
import { Color } from "../../styles/GlobalStyles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  const [buildings, loadBuildings] = useState([]);
  const [apartments, loadApartments] = useState([]);
  const [customers, loadCustomer] = useState([]);
  useEffect(() => {
    loadItem('buildings','',loadBuildings,'location')
    loadItem('apartments','',loadApartments,'*')
    loadItem('customers','',loadCustomer,'')
  }, [])

  let emptyroom = apartments.filter(({attributes}) => attributes.contracts.data.length==0).length
  const apartment_pie = {
    labels: ["Hết chỗ","Còn chỗ","Chưa có người thuê"],
    datasets: [
      {
        label: "Tỉ lệ căn hộ",
        backgroundColor: ["rgb(45, 125, 255)","rgb(255, 148, 27)","rgb(120, 120, 120)"],
        borderColor: "rgb(255,255,255)",
        data: [(apartments.length-emptyroom), 0, emptyroom],
      },
    ],
    options: {
      plugins: {
          legend: {
            position : 'bottom',
          }
      }
    }
  };
  let north = (buildings.filter(({attributes}) => attributes.location.data.attributes.Province<37).length)
  let south = (buildings.filter(({attributes}) => attributes.location.data.attributes.Province>69).length)
  const location_pie = {
    labels: ["Miền Bắc","Miền Trung", "Miền Nam"],
    datasets: [
      {
        label: "Tỉ lệ tòa nhà theo khu vực",
        backgroundColor: ["rgb(255, 35, 55)","rgb(25, 255, 45)","rgb(10, 50, 245)"],
        borderColor: "rgb(255,255,255)",
        data: [north, (buildings.length-north-south), south],
      },
    ],
  };
  let hadcontract = (customers.filter(({attributes}) => attributes.hadContract).length)
  const user_pie = {
    labels: ["Đã có hợp đồng","Chưa có hợp đồng"],
    datasets: [
      {
        label: "Tỉ lệ người dùng có hợp đồng",
        backgroundColor: ["rgb(45, 125, 255)","rgb(255, 148, 27)"],
        borderColor: "rgb(255,255,255)",
        data: [hadcontract, (customers.length-hadcontract)],
      },
    ],
  };
  return (
    <div>
      <Typography variant="h6" fontWeight="600">Tổng quan</Typography>
      <Grid2 container sx={{ width: '100%', my: 2}} spacing={2}>
        <Grid2 sm={6} md={3} xl={3}>
          <Item>
            <Typography variant="subtitle2" fontWeight="600">Tổng doanh thu</Typography>
            <Typography variant="h5" fontWeight="600" color='#0591FC'>0đ</Typography>
          </Item>
        </Grid2>
        <Grid2 sm={6} md={3} xl={3}>
          <Item>
            <Typography variant="subtitle2" fontWeight="600">Tổng tòa nhà</Typography>
            <Typography variant="h5" fontWeight="600" color='#0591FC'>{buildings.length}</Typography>
          </Item>
        </Grid2>
        <Grid2 sm={6} md={3} xl={3}>
          <Item>
            <Typography variant="subtitle2" fontWeight="600">Tổng căn hộ</Typography>
            <Typography variant="h5" fontWeight="600" color='#0591FC'>{(apartments==undefined) ? 0 : apartments.length}</Typography>
          </Item>
        </Grid2>
        <Grid2 sm={6} md={3} xl={3}>
          <Item>
            <Typography variant="subtitle2" fontWeight="600">Tổng người dùng</Typography>
            <Typography variant="h5" fontWeight="600" color='#0591FC'>{(customers==undefined) ? 0 : customers.length}</Typography>
          </Item>
        </Grid2>
      </Grid2>
      <Grid2 container sx={{ width: '100%', my: 2}} spacing={2}>
        <Grid2 sm={4} md={4} xl={4}>
          <Item>
            <Typography variant="subtitle2" fontWeight="600">Căn hộ</Typography>
            <Pie data={apartment_pie} />
          </Item>
        </Grid2>
        <Grid2 sm={4} md={4} xl={4}>
          <Item>
            <Typography variant="subtitle2" fontWeight="600">Khu vực</Typography>
            <Doughnut data={location_pie} />
          </Item>
        </Grid2>
        <Grid2 sm={4} md={4} xl={4}>
          <Item>
            <Typography variant="subtitle2" fontWeight="600">Người dùng</Typography>
            <Pie data={user_pie} />
          </Item>
        </Grid2>
      </Grid2>
      <Typography variant="h6">Trong tháng này</Typography>
      <Grid2 container sx={{ width: '100%', my: 2}} spacing={2}>
        <Grid2 sm={6} md={3} xl={3}>
          <Item>
            <Typography variant="subtitle2" fontWeight="600">Doanh thu</Typography>
            <Typography variant="h5" fontWeight="600" color='#0591FC'> </Typography>
            <Typography variant="body2"> so với tháng trước</Typography>
          </Item>
        </Grid2>
        <Grid2 sm={6} md={3} xl={3}>
          <Item>
            <Typography variant="subtitle2" fontWeight="600">Lợi nhuận</Typography>
            <Typography variant="h5" fontWeight="600" color='#0591FC'> </Typography>
            <Typography variant="body2"> so với tháng trước</Typography>
          </Item>
        </Grid2>
        <Grid2 sm={6} md={3} xl={3}>
          <Item>
            <Typography variant="subtitle2" fontWeight="600">Hợp đồng</Typography>
            <Typography variant="h5" fontWeight="600" color='#0591FC'> </Typography>
            <Typography variant="body2"> so với tháng trước</Typography>
          </Item>
        </Grid2>
        <Grid2 sm={6} md={3} xl={3}>
          <Item>
            <Typography variant="subtitle2" fontWeight="600">Người dùng</Typography>
            <Typography variant="h5" fontWeight="600" color='#0591FC'> </Typography>
            <Typography variant="body2"> so với tháng trước</Typography>
          </Item>
        </Grid2>
      </Grid2>
    </div>
  );
}
