import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Rent = () => {
  return (
    <>
      <Popular>
        <Contain>
          <First>
            Properties for Rent
            <Button to="/properties">
              Explore <AiOutlineArrowRight />{" "}
            </Button>
          </First>

          {/* <Best>We have the best of properties in the best of locations across the country.</Best> */}

          <Pictures>
            <Austin>
              <AustinImg src="/images/room6.jpg" />
              <AustinText>
                <Text1 style={{ background: "#e4e932", color: " #314963" }}>
                  Featured
                </Text1>
                <Text1>Ikorodu</Text1>
              </AustinText>
            </Austin>

            <Austin>
              <AustinImg src="/images/room7.jpg" />
              <AustinText>
                <Text1 style={{ background: "#e4e932", color: " #314963" }}>
                  Featured
                </Text1>
                <Text1>Ketu</Text1>
              </AustinText>
            </Austin>

            <Austin>
              <AustinImg src="/images/room8.jpg" />
              <AustinText>
                <Text1 style={{ background: "#e4e932", color: " #314963" }}>
                  Featured
                </Text1>
                <Text1>Apapa</Text1>
              </AustinText>
            </Austin>

            <Austin>
              <AustinImg src="/images/room9.jpg" />
              <AustinText>
                <Text1 style={{ background: "#e4e932", color: " #314963" }}>
                  Featured
                </Text1>
                <Text1>Akure</Text1>
              </AustinText>
            </Austin>

            <Austin>
              <AustinImg src="/images/room1.jpg" />
              <AustinText>
                <Text1 style={{ background: "#e4e932", color: " #314963" }}>
                  Featured
                </Text1>
                <Text1>Aba</Text1>
              </AustinText>
            </Austin>
          </Pictures>
        </Contain>
      </Popular>
    </>
  );
};

export default Rent;

// const Popular = styled.div``;

// const Popular = styled.div``;

// const Popular = styled.div``;

// const Popular = styled.div``;

const Text1 = styled.div`
  color: white;
  font-weight: 700;
  font-size: 12px;
  padding: 5px 7px;
  background-color: #314963;
  color: white;
  border-radius: 3px;
`;

const AustinText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  position: absolute;
  top: 20px;
  left: 12px;
  right: 10px;
`;

const AustinImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Austin = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;

  @media screen and (max-width: 544px) {
    margin: 0;
  }
`;

const Pictures = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 544px) {
    font-size: 20px;
    justify-content: center;
    gap: 1rem;
  }
`;

const First = styled.div`
  font-size: 25px;
  font-weight: 700;
  // color: #511378;
  padding: 5px 8px;
  color: #52325d;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 544px) {
    font-size: 20px;
  }

  @media screen and (max-width: 425px) {
    font-size: 17px;
    justify-content: space-around;
  }

  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;
const Button = styled(Link)`
  color: #511378;
  cursor: pointer;
  font-weight: 400;
  font-size: 17px;
  text-decoration: none;
  border: none;
  background-color: transparent;
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 544px) {
    font-size: 12px;
    font-weight: 500;
    width: 70px;
  }
`;

const Contain = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const Popular = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;
