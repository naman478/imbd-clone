import React from "react";
import './StarProduct.css';

function StarProduct() {
  let starProduct = {
    starProduct: [
      {
        url: "https://www.mi.com/in/power-banks",
        image:
          "https://i02.appmifile.com/427_operator_in/09/05/2021/4cedd9d52d3d66e09ee27dde3914efe1.jpg?width=612&height=612",
      },
      {
        url: "https://store.mi.com/in/item/3203500001",
        image:
          "https://i02.appmifile.com/341_operator_in/30/05/2021/e866f96094c058af222f53bc97bcb5ed.jpg?width=612&height=612",
      },
      {
        url: "https://store.mi.com/in/item/3192900017",
        image:
          "https://i02.appmifile.com/402_operator_in/15/04/2021/d6d00b5cb2a212f4a9a13d4d7c1bdcc1.png?width=612&height=612",
      },
      {
        url: "https://www.mi.com/in/bands-fitness",
        image:
          "https://i02.appmifile.com/571_operator_in/22/10/2020/2df7eba98e739b3329dda041b05a0aac.jpg?width=612&height=612",
      },
    ],
  };

  return (
    <div className="sp">
      <div className="sp1">
        <a href={starProduct.starProduct[0].url}>
          <img className="hover"src={starProduct.starProduct[0].image} />
        </a>
      </div>
      <div className="sp2">
        <div className="sp3">
          <a href={starProduct.starProduct[1].url}>
            <img className="hover" src={starProduct.starProduct[1].image} />
          </a>

          <a href={starProduct.starProduct[2].url}>
            <img className="hover" src={starProduct.starProduct[2].image} />
          </a>
        </div>
        <div className="sp4">
          <a href={starProduct.starProduct[3].url}>
            <img  src={starProduct.starProduct[3].image} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default StarProduct;
