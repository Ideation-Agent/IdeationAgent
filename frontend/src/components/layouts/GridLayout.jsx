import styled from "@emotion/styled";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
`;

function GridLayout(props) {
  return (
    <div className="grid-layout">
      {props.children}
    </div>
  );
}

export default GridLayout;