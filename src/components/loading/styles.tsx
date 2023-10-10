import styled from "styled-components"

export const Container = styled.div`
  border-radius: ${(props: any) => props.borderRadius || "10px"};
  height: ${(props: any) => props.height || "100%"};
  width: ${(props: any) => props.width || "100%"};
  animation: loading infinite 2s;
  margin: ${(props: any) => props.margin || "0px"};

  @keyframes loading {
    0% {
      background: ${(props: any) => !props.dark ? "rgb(0, 0, 0, 0.05)" : "rgb(255, 255, 255, 0.05)"};
    }
    50% {
      background: ${(props: any) => !props.dark ? "rgb(0, 0, 0, 0.10)" : "rgb(255, 255, 255, 0.15)"};
    }
    100% {
      background: ${(props: any) => !props.dark ? "rgb(0, 0, 0, 0.05)" : "rgb(255, 255, 255, 0.05)"};
    }
  }
`;