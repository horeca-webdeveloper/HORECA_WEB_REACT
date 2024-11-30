import React, { useEffect } from "react";
import { Wrapper } from "../../shared/Wrapper";
import { useLocation, Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";
const PaymentSuccess = () => {
  const location = useLocation();
  const { triggerUpdateCart, updateTempCart } = useCart();
  const queryParams = new URLSearchParams(location.search);
  const payment_id = queryParams.get('payment_id');
  const trans_id = queryParams.get('trans_id');
  const order_id = queryParams.get('order_id');

  useEffect(() => {
    localStorage.removeItem('CartItems');
    localStorage.removeItem('TotalCartItems');
    triggerUpdateCart();
  }, []);
  return (
    <>

      <Wrapper className="h-screen">
      <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 p-4">
    <div class="p-4"> 

    <span className='mt-3 text-[#186737] font-semibold text-[20px] inline-flex items-center'>
  <img src={process.env.PUBLIC_URL + "/icons/Frame.png"} alt="" style={{ backgroundColor: '#186737', marginRight: '8px' ,borderRadius:'20px'}} />
  Congratulations, Successfully Order Placed
</span>
    </div>
    
</div>


        <div className="flex flex-col items-center justify-center text-center mt-[100px] mb-[100px]">
          <h1 className="leading-[70.38px] text-[60px] font-semibold">
            <span>Thank You</span>
          </h1>
          <div className=" w-[80%]">
            <h3 className="leading-[70.38px] text-[60px] font-semibold">
              <span>Your Payment is successfull</span>
            </h3>
            <span className="text-[20px] font-semibold">Payment Id : {payment_id}</span>
            <br />
            <span className="text-[20px] font-semibold">Transaction Id : {trans_id}</span>
            <br />
            <span className="text-[20px] font-semibold">Order  Id : {order_id}</span>
            <br />
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
