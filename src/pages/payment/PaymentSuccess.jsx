import React, { useEffect } from "react";
 import { Wrapper } from "../../shared/Wrapper";
 import {useLocation,Link} from 'react-router-dom';

const PaymentSuccess = () => {
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const payment_id = queryParams.get('payment_id');
   const trans_id = queryParams.get('trans_id');
   const order_id = queryParams.get('order_id');

  useEffect(()=>{
    localStorage.removeItem('CartItems');
    localStorage.removeItem('TotalCartItems');
  },[]);
  return (
    <>
      
      <Wrapper className="h-screen">
        <div className="flex flex-col items-center justify-center text-center mt-[100px] mb-[100px]">
          <h1 className="leading-[70.38px] text-[60px] font-semibold">
            <span>Thank You</span>
            
          </h1>
          <div className=" w-[80%]">
          <h3 className="leading-[70.38px] text-[60px] font-semibold">
             <span>Your Payment is successfull</span>
             </h3>
             <span className="text-[20px] font-semibold">Payment Id : {payment_id}</span>
             <br/>
             <span className="text-[20px] font-semibold">Transaction Id : {trans_id}</span>
             <br/>
             <span className="text-[20px] font-semibold">Order  Id : {order_id}</span>
             <br/>
             <Link to="/home">
             <button className=" items-center justify-center bg-[#F1F1F2] rounded-full py-2 px-4 text-sm mr-3 mt-3">Home</button>
             </Link>
          </div>
        </div>
        
      </Wrapper>
    </>
  );
};

export default PaymentSuccess;
