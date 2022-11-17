import { Avatar, Box, Typography } from "@mui/material";
import Grid2, { Grid2Props } from "@mui/material/Unstable_Grid2";
import { Color } from "../styles/GlobalStyles";
import { styled } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import Center from "./StyledComponents/Center";
import { drawerWidth } from "./Navigation/Drawer";
import { AccountCircle } from "@mui/icons-material";

const Container = styled(Grid2)<Grid2Props>(({ theme }) => ({
    width: drawerWidth,
}));

export default function AvatarSection(props: Grid2Props) {
    return (
        <Container container {...props}>
            <Grid2 xs={3}>
                <Center>
                    {/* <Avatar
                        sx={{ bgcolor: deepOrange[500] }}
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                    >
                        B
                    </Avatar> */}
                    <AccountCircle sx={{ fontSize: 45, color: Color.border }} />
                </Center>
            </Grid2>
            <Grid2 xs={8} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="body1" fontWeight="600" color={Color.normalText}>Nguyễn Văn B</Typography>
                <Typography variant="body2" fontWeight="600" color={Color.extraText}>Admin</Typography>
            </Grid2>
        </Container>
    );
}