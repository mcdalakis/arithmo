import React from 'react';
import styled from 'styled-components';

const Book = ({ className, animated = false }: { className?: string; animated?: boolean }) => {
  return (
    <StyledWrapper className={className} $animated={animated}>
      <div className="book">
        <div className="book-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 126 75" className="book">
            <rect strokeWidth={5} stroke="#f97415" rx="7.5" height={70} width={121} y="2.5" x="2.5" />
            <line strokeWidth={5} stroke="#f97415" y2={75} x2="63.5" x1="63.5" />
            <path strokeLinecap="round" strokeWidth={4} stroke="#f97415" d="M25 20H50" />
            <path strokeLinecap="round" strokeWidth={4} stroke="#f97415" d="M101 20H76" />
            <path strokeLinecap="round" strokeWidth={4} stroke="#f97415" d="M16 30L50 30" />
            <path strokeLinecap="round" strokeWidth={4} stroke="#f97415" d="M110 30L76 30" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff7c" viewBox="0 0 0 0" className="book-page">
            <path strokeLinecap="round" strokeWidth={4} stroke="#f97415" d="M40 20H15" />
            <path strokeLinecap="round" strokeWidth={4} stroke="#f97415" d="M49 30L15 30" />
            <path strokeWidth={5} stroke="#f97415" d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z" />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ $animated?: boolean }>` 
  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .book-wrapper {
    width: 150px;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
  }
  .book {
    width: 100%;
    height: auto;
    filter: drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.137));
  }
  .book-wrapper .book-page {
    width: 50%;
    height: auto;
    position: absolute;
    ${props => props.$animated && 'animation: paging 1s linear infinite;'}
    transform-origin: left;
  }
  @keyframes paging {
    0% {
      transform: rotateY(0deg) skewY(0deg);
    }
    50% {
      transform: rotateY(90deg) skewY(-20deg);
    }
    100% {
      transform: rotateY(180deg) skewY(0deg);
    }
  }`;

export default Book;
