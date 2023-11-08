import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";

const Backboard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color: ${COLORS.white};

    border: 2px solid ${COLORS.black};
`;

const Input = styled.textarea`
    border-radius: 16px;

    width: 100%;
    height: 100%;

    padding: 12px 16px;

    color: ${COLORS.black};
    line-height: 110%;

    resize: none;

    overflow-y: scroll;

    ::placeholder {
        color: ${COLORS.gray_1};
    }

    ::-webkit-scrollbar {
        width: 4px;
        background: transparent;
        border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${COLORS.gray_1};
        border-radius: 6px;
    }

    ::-webkit-scrollbar-track {
        background-clip: padding-box;
    }
`;
function TextArea({
    type = "text",
    value,
    setValue,
    placeholder = "Input",
}) {
    return (
        <Backboard>
            <Input
                value={value}
                type={type}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
            />
        </Backboard>
    );
}

export default TextArea;
