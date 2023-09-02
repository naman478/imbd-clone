import React from "react";
import "./Footer.css";

function LastFooter({ footer }) {
  return (
    <div className="Footer">
      <div>
        <p> SUPPORT</p>
        {footer.support.map((item, index) => (
          <a key={item.url} href={item.url}>
            {item.name}
          </a>
        ))}
      </div>

      <div>
        <p> SHOP AND LEARN</p>
        {footer.shopAndLearn.map((item, index) => (
          <a key={item.url} href={item.url}>
            {item.name}{" "}
          </a>
        ))}
      </div>

      <div>
        <p> RETAIL STORE</p>
        {footer.retailStore.map((item, index) => (
          <a key={item.url} href={item.url}>
            {item.name}
          </a>
        ))}
      </div>

      <div>
        <p> ABOUT</p>
        {footer.aboutUS.map((item, index) => (
          <a key={item.url} href={item.url}>
            {item.name}
          </a>
        ))}
      </div>

      <div>
        <p> CONTACT US</p>
        {footer.contactUs.map((item, index) => (
          <a key={item.url} href={item.url}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
export default LastFooter;
