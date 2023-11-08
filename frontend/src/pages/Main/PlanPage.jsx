import RoundBtn from "components/global/RoundBtn";
import {
  InnerOption,
  InnerOptionValue,
  InnerTitle,
} from "components/global/Texts";
import AllFullRow from "components/utils/AllFullRow";
import Block from "components/utils/Block";
import { LayerAlign } from "components/utils/WidgetUtils";
import { useEffect, useState } from "react";

function PlanPage({ data }) {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    console.log(data);
    const newData = Object.entries(data).map(([key, value]) => {
      return { title: key, content: value };
    });
    setDatas(newData);
  }, data);

  return (
    <>
      <InnerTitle>Finalized business plan for you</InnerTitle>

      <Block h={30} />
      {datas
        ? datas.map((value, index) => {
            <AllFullRow>
              <InnerOption>{value.title}:</InnerOption>
              <Block w={12} />
              <InnerOptionValue>{value.content}</InnerOptionValue>
            </AllFullRow>;
          })
        : null}

      <Block h={40} />
      <AllFullRow main={LayerAlign.center}>
        <RoundBtn
          onClick={() => {
            // TODO: PDF 다운
          }}>
          Save
        </RoundBtn>
      </AllFullRow>
    </>
  );
}

export default PlanPage;
