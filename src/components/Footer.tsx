import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/Arithmo_Logo-removebg-preview.png";
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const FacebookTooltip = () => {
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
    // Check if device supports hover (desktop) or is coarse pointer (mobile)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    if (isTouch) {
      if (!isActive) {
        e.preventDefault();
        setIsActive(true);
      }
    }
  };

  return (
    <StyledTooltipWrapper>
      <div className={`tooltip-container ${isActive ? 'active' : ''}`} ref={containerRef}>
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img">Fb</div>
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
            href="https://www.facebook.com/frontistirioarithmo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="facebookSVG">
                <svg viewBox="0 0 40 40" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                  <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)" y2="407.5726" y1="406.6018" x2="-277.375" x1="-277.375" id="a">
                    <stop stopColor="#0062e0" offset={0} />
                    <stop stopColor="#19afff" offset={1} />
                  </linearGradient>
                  <path d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z" fill="url(#a)" />
                  <path d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z" fill="#fff" />
                </svg>
              </span>
            </div>
            {/* This text is hidden by the animation but good for accessibility */}
            <div className="text">Facebook</div>
          </a>
        </div>
      </div>
    </StyledTooltipWrapper>
  );
}

const StyledTooltipWrapper = styled.div`
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
  }

  .tooltip {
    position: absolute;
    bottom: 100%; /* Position above the icon */
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 25px; /* Space between icon and tooltip */
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
    background: #3b5998;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid #29487d;
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
  .icon .layer {
    width: 40px;
    height: 40px;
    border: 3px solid #1877f2;
    border-radius: 50%;
    transition: transform 0.3s, border 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 10px rgba(24, 119, 242, 0.5), 0 0 15px rgba(24, 119, 242, 0.3);
  }

  .icon:hover .layer,
  .tooltip-container.active .icon .layer {
    transform: rotate(-35deg) skew(20deg);
    box-shadow: 0 0 20px rgba(24, 119, 242, 0.8), 0 0 30px rgba(24, 119, 242, 0.5);
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
    color: #1877f2;
    border-color: #1877f2;
  }

  .icon:hover .layer span,
  .tooltip-container.active .icon .layer span {
    box-shadow: -1px 1px 3px #1877f2;
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

  .facebookSVG {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1877f2;
    border-radius: 50%;
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
    border: 1px solid #1877f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #1877f2;
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
`;

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
`;

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Αριθμώ Logo"
                className="h-20 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Φροντιστήριο Μέσης Εκπαίδευσης.
              Αριθμούμε Επιτυχίες με Σεβασμό στον Μαθητή - στην Μαθήτρια.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Επικοινωνία</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Παναγή Τσαλδάρη 21, Μελίσσια</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">210-8043136</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">snarithmo@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Πληροφορίες</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Άδεια Λειτουργίας: 2202580</p>
              <p>Μέλος της Ο.Ε.Φ.Ε.</p>
              <p className="mt-4 font-semibold">35 χρόνια εμπειρίας</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-center md:text-left">Ακολουθήστε μας</h3>
            <div className="flex items-center justify-center gap-5 md:justify-start">
              <InstagramTooltip />
              <FacebookTooltip />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2012. ΑΡΙΘΜΩ ΦΡΟΝΤΙΣΤΗΡΙΟ Μ.Ε. All Rights Reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://github.com/mcdalakis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              mcdalakis
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
