import styled from "styled-components";

const StyledLayout = styled.div`
    .main-wrapper {
        width: 80%;
        margin-left: 20%;
    }

    @media screen and (max-width: 450px) {
        .main-wrapper {
        width: 100%;
        margin-left: 0;
        margin-bottom: 20%;
        z-index: 100;
    }
}
`
export default StyledLayout;