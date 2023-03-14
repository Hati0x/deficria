import { NavBar } from "../NavBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const header = useRef(null);
  useEffect(() => {
    const scrollListener = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  //close menu after pathchanges
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles["header--sticky"] : ""}`}
      ref={header}>
      <div>Defi Cria</div>
      <button
        className={styles["menu__button"]}
        onClick={handleClick}>
        {!isOpen && <RxHamburgerMenu className={styles["menu__icon"]} />}
        {isOpen && <AiOutlineClose className={styles["menu__icon"]} />}
      </button>
      <NavBar show={isOpen} />
      {/* <div className={styles.profile}>Profile</div> */}
    </header>
  );
};
