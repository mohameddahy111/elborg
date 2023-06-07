import React from "react";

const Card = ({ data  ,deleteItem}) => {
  return (
    <div>
      <div className="container-card">
        <div className="card-head">
          <div className="card-title">
            <h6>مدرية الشون الصحية بالاسكندرية</h6>
            <span>الادارة الصحية ببرج العرب</span>
          </div>
          <div className="card-logo">
            <img src="logo.jpg" width={"100%"} />
          </div>
        </div>
        <div className="card-name">
          <h4>{data.name}</h4>
        </div>
        <div className="card-footer">
          <span>رقم التشغيلة : {data.noWork}</span>
          <span>تاريخ الصلاحية : {data.exp}</span>
        </div>
      <button className="btn-delelt" onClick={()=>deleteItem(data.name)}>
        delete
      </button>
      </div>
    </div>
  );
};

export default Card;
