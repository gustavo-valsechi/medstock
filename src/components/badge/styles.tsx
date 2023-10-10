import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.8rem;
  padding: 0 1rem;
  position: relative;

  div {
    position: relative;
    z-index: 1;
    color: ${(props: any) => props.color};
    font-size: .75rem;
    font-weight: 500;
    text-transform: lowercase;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    background: ${(props: any) => props.color};
    opacity: .2;
  }
`;