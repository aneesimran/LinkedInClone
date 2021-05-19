import React from "react";
import styled from "styled-components";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <WidgetArticles>
      <WidgetArticleLeft>
        <FiberManualRecordIcon />
      </WidgetArticleLeft>
      <WidgetArticleRight>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </WidgetArticleRight>
    </WidgetArticles>
  );

  return (
    <WidgetsContainer>
      <WidgetHeader>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </WidgetHeader>
      {newsArticle(
        "Covid Indian Variant",
        "Where is it and how does it spread?"
      )}
      {newsArticle(
        "NHS Nurse Quits",
        "Nurse who looked after the PM quits over Goverment's 1% pay rise"
      )}
      {newsArticle(
        "Google I/O Updates",
        "Five things you probably missed from Google I/O"
      )}
      {newsArticle(
        "UK Inflation Doubles!",
        "Rise in cost of clothing and footwear also contributes to 1.5% figure, says ONS"
      )}
    </WidgetsContainer>
  );
}

export default Widgets;

const WidgetsContainer = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  height: fit-content;
  padding-bottom: 10px;
`;

const WidgetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  > h2 {
    font-size: 16px;
    font-weight: 400;
  }
`;

const WidgetArticles = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;
  :hover {
    background-color: whitesmoke;
  }
`;

const WidgetArticleLeft = styled.div`
  color: #0177b7;
  margin-right: 5px;
  > .MuiSvgIcon-root {
    font-size: 15px;
  }
`;

const WidgetArticleRight = styled.div`
  flex: 1;
  > h4 {
    font-size: 14px;
  }
  > p {
    padding-top: 5px;
    font-size: 12px;
    color: gray;
  }
`;
