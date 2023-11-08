import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 100%;
    height: 100%;

    max-width: 1150px;

    background-color: transparent;

    transition: all 0.2s ease-in-out;
`;
function InnerLayout({ children, ...props }) {
    return <Container {...props}>{children}</Container>;
}

export default InnerLayout;
