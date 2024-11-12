import React from "react";
import { FaClipboardList, FaPaintBrush, FaShoppingCart } from "react-icons/fa";
import { FaChartLine, FaComputer, FaPenNib, FaVideo } from "react-icons/fa6";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const HoverDiv = styled.div`
  width: 8rem;
  height: 9rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;

  &:hover::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: #c8e6c9;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: splash 0.6s ease forwards;
  }

  @keyframes splash {
    0% {
      width: 0;
      height: 0;
      opacity: 0.5;
    }
    50% {
      width: 150%;
      height: 150%;
      opacity: 0.3;
    }
    100% {
      width: 300%;
      height: 300%;
      opacity: 0;
    }
  }
`;

const Category = () => {
  return (
    <Fade className="flex justify-center gap-10 text-[#063840]">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10">
        <HoverDiv>
          <FaComputer className="font-bold text-2xl" />
          <p className="font-medium">
            Programming <br /> and Tech
          </p>
        </HoverDiv>
        <HoverDiv>
          <FaChartLine className="font-bold text-2xl" />
          <p className="font-medium">
            Digital <br /> Marketing
          </p>
        </HoverDiv>
        <HoverDiv>
          <FaPaintBrush className="font-bold text-2xl" />
          <p className="font-medium">
            Graphic <br /> Design
          </p>
        </HoverDiv>
        <HoverDiv>
          <FaVideo className="font-bold text-2xl" />
          <p className="font-medium">
            Video <br /> Production
          </p>
        </HoverDiv>
        <HoverDiv>
          <FaPenNib className="font-bold text-2xl" />
          <p className="font-medium">
            Content <br /> Writing
          </p>
        </HoverDiv>
        <HoverDiv>
          <FaShoppingCart className="font-bold text-2xl" />
          <p className="font-medium">
            E-commerce <br /> Management
          </p>
        </HoverDiv>
        <HoverDiv>
          <FaPenNib className="font-bold text-2xl" />{" "}
          {/* Writing & Translation icon */}
          <p className="font-medium">
            Writing & <br /> Translation
          </p>
        </HoverDiv>
      </div>
    </Fade>
  );
};

export default Category;
