import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex !important;
  position: fixed;
  z-index: ${(props: any) => (props.toggle ? "999" : "-1")};
  flex-direction: ${(props: any) => (props.left ? "row-reverse" : "row")} !important;
  transform: ${(props: any) => (props.toggle ? "translateX(0%)" : "translateX(100%)")};
  transition: ${(props: any) => (props.toggle ? ".0s ease .0s" : ".3s ease .3s")};

  .modal-nummus-back {
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.3);
    opacity: ${(props: any) => (props.toggle ? "1" : "0")};
    transition: ease 0.3s;
    position: absolute;
  }

  .modal-nummus-container {
    display: flex;
    flex-direction: column;
    height: ${(props: any) => !props.center ? "100%" : undefined};
    width: ${(props: any) => !props.center ? "18rem" : undefined};
    border-radius: ${(props: any) => props.center ? "10px" : undefined};
    max-height: ${(props: any) => props.center ? "95%" : "100%"};
    max-width: ${(props: any) => props.center ? "95%" : "100%"};
    background: ${({ theme }) => theme.primary};
    transform: ${(props: any) =>
    props.toggle
      ? props.center
        ? "translateX(-50%) translateY(50%)"
        : "translateX(0rem)"
      : props.center
        ? "translateX(-50%) translateY(43%)"
        : props.left
          ? "translateX(-18rem)"
          : "translateX(18rem)"
  };
    opacity: ${(props: any) => props.center && !props.toggle ? '0' : '1'};
    transition: ease 0.3s;
    position: absolute;

    ${(props: any) => (
    props.center
      ? "left: 50%; bottom: 50%;"
      : props.left
        ? "left: 0;"
        : "right: 0;"
  )}

    @media(max-width: 757px) {
      border-radius: ${(props: any) => props.center ? "10px 10px 0 0" : undefined};
      width: ${(props: any) => !props.center ? "18rem" : "100%"};
      max-width: 100%;

      transform: ${(props: any) =>
    props.toggle
      ? props.center
        ? "translateX(-50%) translateY(0)"
        : "translateX(0rem)"
      : props.center
        ? "translateX(-50%) translateY(0)"
        : props.left
          ? "translateX(-18rem)"
          : "translateX(18rem)"
  };

      ${(props: any) => (
    props.center
      ? "left: 50%; bottom: 0;"
      : props.left
        ? "left: 0;"
        : "right: 0;"
  )}
    }

    .modal-nummus-header {
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgb(0, 0, 0, 0.2);

      .modal-nummus-title {
        color: #333;
        font-size: 1rem;
        font-weight: 500;

        i {
          margin-right: .5rem;
        }

        span {
          word-break: break-word;
        }
      }

      .fa-xmark {
        color: rgb(0, 0, 0, 0.6);
        margin-left: .5rem;
        cursor: pointer;

        &:hover {
          color: rgb(0, 0, 0, 1);
        }
      }
    }

    .modal-nummus-content {
      overflow-x: hidden;
      overflow-y: overlay;
      position: relative;

      .modal-nummus-close {
        position: absolute;
        color: ${(props: any) => props.light ? 'rgb(255, 255, 255, 0.6)' : 'rgb(0, 0, 0, 0.6)'};
        top: ${(props: any) => props.center ? '1rem' : '1.5rem'};
        right: ${(props: any) => props.center ? '1rem' : '1.5rem'};
        width: 1rem;
        height: 1rem;
        cursor: pointer;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          color: ${(props: any) => props.light ? 'rgb(255, 255, 255, 1)' : 'rgb(0, 0, 0, 1)'};
        }
      }
    }

    .modal-nummus-buttons {
      padding: 1rem 2rem;

      @media(max-width: 757px) {
        padding: 1rem 2rem 2rem;
      }

      button {
        width: 100%;
        margin-bottom: .5rem;
      }

      button:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
