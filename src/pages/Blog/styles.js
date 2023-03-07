import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  div {
    flex-direction: column;
  }

  span {
    font-size: 40px;
    color: #fff;
  }
`;

export const ContentHead = styled.div`
  display: flex;
  background-color: #0c0b38;
  padding: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div``;

export const Services = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MenuContent = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-width: 280px;
  width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  padding: 30px 20px;
  margin-right: 20px;

  h2 {
    font-size: 24px;
    color: #6c6c80;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  label {
    margin: 12px;
  }

  select {
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 12px;
    font-size: 16px;
    color: #6c6c80;
    width: 100%;
    margin-bottom: 12px;
  }

  button {
    width: 100%;
    height: 48px;
    background: #0c0b38;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: 0;
    margin-top: 20px;
    transition: background-color 0.2s;
    cursor: pointer;
  }

  button:hover {
    background: #1e0270;
  }

  input {
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px;
    font-size: 16px;
    color: #6c6c80;
    width: 100%;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const JobItem = styled.div`
  min-width: 360px;
  max-width: 600px;
  display: flex;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex-direction: column;

  button {
    width: 100%;
    background: #0c0b38;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: center;
    transition: background 0.25s;

    &:hover {
      background: #ffd700;
    }

    div {
      color: #fff;
      font-weight: bold;
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.3);
      svg {
        margin-right: 5px;
      }
    }
    span {
      flex: 1;
      color: #fff;
      text-align: center;
      font-weight: bold;
    }
  }
`;

export const JobItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    align-self: center;
    max-width: 60px;
    border-radius: 10px;
    padding: 8px;
  }

  span {
    font-size: 16px;
  }
`;

export const JobItemContent = styled.div`
  display: flex;
  margin: 10px;
`;
