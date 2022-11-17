export const Color = {
    primary: "#2E90FA",
    secondary: "#FFFFFF",
    success: "#32D583",
    warning: "#FDB022",
    error: "#F04438",
    bgColor: "#F9FAFB",
    shadow: "#F2F4F7",
    lineBreak: "#E4E7EC",
    border: "#D0D5DD",
    extraText: "#546079",
    normalText: "#101828",
    gradient: ["#53B1FD", "#155EEF"],
    primaryTransparent: `rgba(46, 145, 250, 0.075)`,
};

export const formwidth = (kind : number) =>
{
    if (kind==1) return {m: '25px 1.5%', width: '97%'}
    else return {m: '25px 1.5%', width: '47%'}
}