import styled from "@emotion/styled";
import { COLORS } from "styles/global/globalColors";
import { useEffect, useRef } from "react";

const Backboard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: ${({ w }) => w};
    height: ${({ h }) => h}px;
    background-color: transparent;
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
        margin-top: 12px;
        margin-bottom: 12px;
        background-clip: padding-box;
    }
`;

function ElasticTextArea({
    type = "text",
    min,
    max,
    width,
    value,
    setValue,
    placeholder = "Input",
    ...props
}) {
    const backRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        backRef.current.style.height = `${min}px`;
        if (inputRef.current.scrollHeight < max) {
            inputRef.current.style.overflowY = "hidden";
            backRef.current.style.height = inputRef.current.scrollHeight + "px";
        } else {
            inputRef.current.style.overflowY = "scroll";
            backRef.current.style.height = `${max}px`;
        }
    }, [value, min, max]);

    return (
        <Backboard w={width} h={min} ref={backRef}>
            <Input
                ref={inputRef}
                value={value}
                type={type}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                {...props}
            />
        </Backboard>
    );
}

export default ElasticTextArea;
