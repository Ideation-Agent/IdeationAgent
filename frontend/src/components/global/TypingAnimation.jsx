import { useEffect, useState } from "react";

function TypingAnimation({ message, isT, setIsTyping }) {
  const [render, setRender] = useState();
  const [typedText, setTypedText] = useState(""); // 초기화된 상태 값
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let textIndex = 0;

    const typingInterval = setInterval(() => {
      if (!isTypingComplete) {
        const nextChar = message[textIndex];
        if (nextChar) {
          textIndex++;
          setTypedText((prevTypedText) => prevTypedText + nextChar); // 이 부분 수정

          if (textIndex === message.length) {
            setIsTypingComplete(true);
            const newData = false;
            setIsTyping(newData);
            console.log("complete");
            setRender([render]);
            console.log(isT);
            console.log("complete");
            clearInterval(typingInterval);
          }
        }
      }
    }, 20); // 타이핑 속도 조절 (100ms 마다 한 글자씩)

    return () => {
      clearInterval(typingInterval);
    };
  }, [message, isTypingComplete]);

  return <div>{typedText}</div>;
}

export default TypingAnimation;
