import React from "react";
import styled from "@emotion/styled";
import useMediaQuery from "../../hooks/useMediaQuery";

const ButtonContainer = styled.button(
  ({ isDesktop }: { isDesktop: boolean }) => ({
    backgroundColor: isDesktop ? "orange" : "steelblue",
  })
);

const EmotionParameter = () => {
  const isDesktop: boolean = useMediaQuery("(min-width:600px)");
  return <ButtonContainer isDesktop={isDesktop}>Testing</ButtonContainer>;
};

export default EmotionParameter;
