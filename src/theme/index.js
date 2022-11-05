import { ThemeProvider } from "styled-components";

const theme = {
    color: {
        mainLightColor: "#FFFFFF",
        mainBrownColor: "#FBBA12",
        mainAshColor: "#707070",
        mainDarkColor: "#0F0F0F"
    },
    background: {
        primaryDarkBg: "#000000",
        secondaryDarkBg: "#0F0F0F",
        BrownLinearBg: "linear-gradient(89.79deg, #AB491C -19.39%, #DDAE45 123.38%)",
        darkPurpleLinearBg: "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
        skyeBlueLinearBg: "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)"

    },
    fontsize: {
        fontSize16: "16px",
        fonstSize28: "28px",
        fonstSize10: "10px"
    },
    fontFamily: {
        fontFamily : "san sarif"
    },
    fontWeight: {
        fontWeight500: 500,
        fontWeight600: 600,
        fontWeight700: 700
    }
    
}

const StyledThemeProvider = ({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledThemeProvider;