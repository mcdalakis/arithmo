import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const InstagramTooltip = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    if (isTouch) {
      if (!isActive) {
        e.preventDefault();
        setIsActive(true);
      }
    }
  };

  return (
    <StyledInstagramTooltipWrapper>
      <div className={`tooltip-container ${isActive ? 'active' : ''}`} ref={containerRef}>
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img">Ig</div>
              <div className="details">
                <div className="name">Αριθμώ</div>
                <div className="username">@frontistirioarithmo</div>
              </div>
            </div>
            <div className="about">Ακολουθήστε μας!</div>
          </div>
        </div>
        <div className="text">
          <a
            className="icon"
            href="https://www.instagram.com/frontistirioarithmo/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="instagramSVG">
                <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="1.2em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </div>
            <div className="text">Instagram</div>
          </a>
        </div>
      </div>
    </StyledInstagramTooltipWrapper>
  );
}

const StyledInstagramTooltipWrapper = styled.div`
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
  }

  .tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 25px;
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 15px;
    background: #303030;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #2a2b2f;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid #52382f;
    white-space: nowrap;
  }

  .tooltip-container:hover .tooltip,
  .tooltip-container.active .tooltip {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateX(-50%) translateY(-10px);
  }

  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }
  .layer {
    width: 40px;
    height: 40px;
    transition: transform 0.3s;
    border-radius: 50%;
  }

  .icon:hover .layer,
  .tooltip-container.active .icon .layer {
    transform: rotate(-35deg) skew(20deg);
  }

  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 50%;
    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: #e6683c;
    border-color: #e6683c;
  }

  .icon:hover.layer span,
  .tooltip-container.active .icon .layer span {
    box-shadow: -1px 1px 3px #e6683c;
  }
  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
  }
  .icon:hover .text,
  .tooltip-container.active .icon .text {
    bottom: -35px;
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1),
  .tooltip-container.active .icon .layer span:nth-child(1) {
    opacity: 0.2;
  }
  .icon:hover .layer span:nth-child(2),
  .tooltip-container.active .icon .layer span:nth-child(2) {
    opacity: 0.4;
    transform: translate(3px, -3px);
  }
  .icon:hover .layer span:nth-child(3),
  .tooltip-container.active .icon .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(6px, -6px);
  }
  .icon:hover .layer span:nth-child(4),
  .tooltip-container.active .icon .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(9px, -9px);
  }
  .icon:hover .layer span:nth-child(5),
  .tooltip-container.active .icon .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(12px, -12px);
  }

  .instagramSVG {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
  }
  .user {
    display: flex;
    gap: 10px;
  }
  .img {
    width: 50px;
    height: 50px;
    font-size: 25px;
    font-weight: 700;
    border: 1px solid #e6683c;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #e6683c;
  }
  .name {
    font-size: 17px;
    font-weight: 700;
    color: #fff;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #eee;
  }
  .about {
    color: #ccc;
    padding-top: 5px;
  }
\`;

export default InstagramTooltip;
