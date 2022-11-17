import { WidthFull } from "@mui/icons-material";
import { Box, Button, ButtonProps } from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid2 from "@mui/material/Unstable_Grid2";
import {Routes, Route, useNavigate} from 'react-router-dom'


type CustomButtonProps = {
    buttonName: string,
} & ButtonProps

export function SubmitBtn({ buttonName }: CustomButtonProps) {
  const Style = styled(Button)<ButtonProps>(({ theme }) => ({
    fontWeight: 600,
    textTransform: 'none',
    height: 42,
    width: 180
  }));
  return (
    <Style variant="contained" type="submit">
      {buttonName}
    </Style>
  );
}

export function ResetBtn() {
  const Style = styled(Button)<ButtonProps>(({ theme }) => ({
    fontWeight: 600,
    textTransform: 'none',
    height: 42,
    width: 120
  }));
  return (
    <Style variant="contained" type="reset" color="error">Nhập lại</Style>
  );
}

export function BackBtn({ category }: any) {
  const navigate = useNavigate();
  const Style = styled(Button)<ButtonProps>(({ theme }) => ({
    fontWeight: 600,
    textTransform: 'none',
    height: 42,
    width: 150
  }));
  return (
    <Style variant="outlined" onClick={()=>navigate(`/${category}/list`)} color="primary">Hủy bỏ</Style>
  );
}

export function AddBtnGroup({ category,name,id }: any) {
  return (
    <Grid2 container sx={{ width: '100%', m: 1}}>
      <Box component="span" sx={{ p: 2 }}>
        <BackBtn category={category} />
      </Box>
      <Box component="span" sx={{ p: 2, position: "absolute", right: 10}}>
        <Box component="span" sx={{ p: 2 }}>
          <SubmitBtn buttonName={(id==0) ? ('Thêm ' + name) : 'Cập nhật'}/>
        </Box>
        <Box component="span" sx={{ p: 2 }}>
          <ResetBtn />
        </Box>
      </Box>
    </Grid2>
  );
}

export function DeleteBtn() {
  const navigate = useNavigate();
  const Style = styled(Button)<ButtonProps>(({ theme }) => ({
    fontWeight: 600,
    textTransform: 'none',
    height: 42,
  }));
  return (
    <Style variant="outlined" color="error">Xóa</Style>
  );
}

export function AddBtn({ buttonName, category }: any) {
  const navigate = useNavigate();
  const Style = styled(Button)<ButtonProps>(({ theme }) => ({
    fontWeight: 600,
    textTransform: 'none',
    height: 42,
    width: 200
  }));
  return (
    <Style variant="contained" onClick={()=>navigate(`/${category}/add`)}>
      {buttonName}
    </Style>  );
}