import React, { useState, useEffect } from "react";
import style from "../../assets/style/Blog.module.css";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={style.mainScrollButton}>
      <button
        className={`${style.scrollToTop}`}
        onClick={handleClick}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <i class="fas fa-chevron-up text-white"></i>
      </button>
    </div>
  );
}
export default ScrollButton;
