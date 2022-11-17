import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

export function DelConfirm ({id, category, setTrigger, state, details, Delete}: any)
{
  return(
    <>
    <Dialog
      open={state==1}
      onClose={()=>setTrigger(0)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Bạn muốn xóa {category} {id}?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        {
          details.map(({key,value}:any) => <div>{key} : {value}</div>)
        }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={()=>{Delete(id);setTrigger(2)}}>Xóa</Button>
        <Button variant="contained" color="inherit" onClick={()=>setTrigger(0)}>Hủy</Button>
      </DialogActions>
    </Dialog>
        <Dialog
        open={state==2}
        onClose={()=>setTrigger(0)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Đã xóa tòa nhà {id}
        </DialogTitle>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={setTrigger}>Đóng</Button>
        </DialogActions>
      </Dialog>
      </>
  )
}