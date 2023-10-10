import styled from "styled-components"

export const Container: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props: any) => props.size || "1.3rem"};
  font-weight: 500;
  color: ${(props: any) => props.color || props.theme.transparent_6};

  i {
    margin-right: .5rem;
    font-size: ${(props: any) => `calc(${props.size} - 15%)` || "calc(1.3rem - 15%)"};
  }
`;