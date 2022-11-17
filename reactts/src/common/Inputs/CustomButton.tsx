import { Button, ButtonProps } from "@mui/material";
import { styled } from '@mui/material/styles';

type CustomButtonProps = {
    buttonName: string,
} & ButtonProps


export function CustomButton({ buttonName, ...props }: CustomButtonProps) {
    const CusButton = styled(Button)<ButtonProps>(({ theme }) => ({
        fontWeight: 600,
        textTransform: 'none',
        height: 45,
        minWidth: 10
    }));
    return (
        <CusButton
            variant="contained"
            {...props}
        >
            {buttonName}
        </CusButton>
    );
}