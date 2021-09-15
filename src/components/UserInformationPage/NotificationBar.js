import { useEffect, useState } from "react";
import styled from "styled-components";

const Bar = styled.div`
  position: relative;
  display: flex;
  z-index: 2;
  flex-direction: column;
  height: 100%;
  padding-top: 20px;
  border-right: 2px solid;
  border-radius: 0;
  border-color: var(--caret-color);
  background-color: var(--color-notification-tap);
  transition: 0.8s ease;
`;

const Icon = styled.img`
  position: absolute;
  z-index: 2;
  width: 50px;
  height: 80px;
  border-left: 0;
  outline: none;
`;

const Message = styled.div`
  margin-left: 75px;
`;

export default function NotificationBar({ width, height, children, buttonPosition = 0 }) {
  const [position, setPosition] = useState(-width);

  const toggleMenu = () => {
    if (position < 0) {
      setPosition(0);
      return;
    }

    setPosition(-width);
  };

  useEffect(() => {
    setPosition(-width);
  }, [width]);

  return (
    <>
      <Bar
        style={{
          transform: `translatex(${position}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <Icon
          src="/images/notificationMenu.png"
          onClick={toggleMenu}
          style={{
            transform: `translate(${width}px, ${buttonPosition}px)`,
          }}
        />
        <Message>
          {children}
        </Message>
      </Bar>
    </>
  );
};