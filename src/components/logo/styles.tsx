import styled from "styled-components"

export const Container: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: ${(props: any) => props.opacity || "1"};

  .logo-container {
    width: ${(props: any) => Number(props.size) * 1.5 || "2.5"}rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  label {
    font-size: ${(props: any) => props.size || "1.5"}rem;
    font-weight: 600;
    color: ${(props: any) => props.theme.transparent_6};
  }
`;