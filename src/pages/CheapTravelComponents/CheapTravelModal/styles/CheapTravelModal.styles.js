import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  //   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;

  .main-content {
    height: 70%;
    width: 100%;
    border-radius: 0 0 15px 15px;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 0 20px;
  }

  .fav-icon {
    display: grid;
  }

  .fav-icon > button {
    border-radius: 0 0 15px 15px;
  }
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 55%;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 15px;

  .journey-ticket-price {
    text-align: end;
    font-size: 1.2rem;
  }

  .total-parking {
    font-size: 1rem;
  }

  .total-parking-cost {
    font-size: 2rem;
    font-weight: 600;
  }

  .total-parking-refund {
    font-size: 0.7rem;
    color: gray;
  }
`;

export const ModalContent = styled.div`
  .journey-ticket-text {
    font-size: 1rem;
    color: black;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .journey-ticket-header {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  .journey-ticket-code {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;
