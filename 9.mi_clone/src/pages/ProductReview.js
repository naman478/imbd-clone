import React from "react";
import "./ProductReview.css";

function ProductReview() {
  return (
    <div class="prmain">
      <div className="pr">
        <img className="pr_image" src="https://i02.appmifile.com/11_operator_in/19/05/2021/981f40e9e6ecc687153fc6a08b7c067d.jpg?width=606&height=252" />
        <div className="pr_content">
          <h4>PRO DISPLAY. PRO CAMERAS</h4>
          <span>REDMI NOTE 10 PRO</span>
          <b>₹ 15,999</b>
        </div>
  
      </div>
     
      <div className="pr">
        <img className="pr_image"src="https://i02.appmifile.com/426_operator_in/10/05/2021/ced1802c9525a8939582544bb2822f90.jpg?width=606&height=252" />
        <div className="pr_content">
          <h4>TRULY SMART. TRULY SAFE. TRULY CONVENIENT.</h4>
          <span>MI SMART WATER PURIFIER</span>
          <b>₹ 12,999</b>
          <i className="fas fa-shield" />
        </div>
        
      </div>
    </div>
  );
}

export default ProductReview;
