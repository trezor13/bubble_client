import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="w-[100%] flex flex-col justify-center items-center h-[100%]">
      <div className="bg-[#475387] w-[95%] sm:w-[70%] md:w-[60%] lg:w-[40%] flex flex-col justify-center items-center rounded-[10px] h-[80%]">
        <div className="bg-white w-[90%] sm:w-[80%] h-[80%] rounded-[10px] px-[7%] py-[10%] flex flex-col gap-[20px]">
          <div className="w-[100%] flex gap-5 items-center h-[40px] border-[#475387] border-[3px] rounded-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#475387"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              placeholder="Email Address"
              type="text"
              className="outline-none w-[100%] h-[100%] inputStyle"
            />
          </div>
          <div className="w-[100%] flex items-center gap-5 h-[40px] border-[#475387] border-[3px] rounded-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#475387"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              placeholder="Password"
              type="text"
              className="outline-none w-[100%] h-[100%] inputStyle"
            />
          </div>
          <div className="w-[100%]">
            <button className="w-[100%] parenttwo h-[40px] bg-[#475387] rounded-[10px] text-[#fff]">
              Submit
            </button>
          </div>

          <div className="w-[100%] flex xl:flex-row flex-col items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <span>Keep me logged in</span>
            </div>
            <div>
              <span className="font-[600] text-[">Forgot Password</span>
            </div>
          </div>

          <div className="flex gap-5 items-center w-[100%]">
            <div className="bg-[#475387] h-[3px] w-[49%]"></div>
            <span className="w-[2%] flex items-center justify-center">Or</span>
            <div className="bg-[#475387] h-[3px] w-[49%]"></div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="border-[2px] parent hover:text-white flex items-center gap-2 py-[10px] rounded-[25px] px-[15px] border-[#475387]">
              <svg
                className="w-6 h-6 child hover:fill-white"
                viewBox="0 0 48 48"
                id="b"
                xmlns="http://www.w3.org/2000/svg"
                fill="#475387"
              >
                <path
                  className="c"
                  d="m38.6591,40.3009c4.0655-3.7527,6.4109-9.2645,6.4109-15.8123,0-1.5245-.1368-2.9905-.3909-4.3977h-20.2491v8.3264h11.5709c-.5082,2.6777-2.0327,4.945-4.3195,6.4695"
                />
                <path
                  className="c"
                  d="m5.2364,33.6555c3.5377,7.0168,10.7891,11.8445,19.1936,11.8445,5.805,0,10.6718-1.9155,14.2291-5.1991l-6.9777-5.4141c-1.9155,1.29-4.3586,2.0718-7.2514,2.0718-5.59,0-10.3395-3.7723-12.04-8.8541"
                />
                <path
                  className="c"
                  d="m5.2364,14.3641c-1.4659,2.8927-2.3064,6.1568-2.3064,9.6359s.8405,6.7432,2.3064,9.6359l5.5705-4.3391s1.5832-1.2118,1.5832-1.2118c-.43-1.29-.6841-2.6582-.6841-4.085s.2541-2.795.6841-4.085"
                />
                <path
                  className="c"
                  d="m24.43,11.0609c3.1664,0,5.9809,1.0945,8.2286,3.2055l6.1568-6.1568c-3.7332-3.4791-8.5805-5.6095-14.3855-5.6095-8.4045,0-15.6559,4.8277-19.1936,11.8641l7.1536,5.5509c1.7005-5.0818,6.45-8.8541,12.04-8.8541Z"
                />
              </svg>
              <button className="text-[15px] font-[600]">
                Continue With Google
              </button>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 text-[15px]">
              <span>Don&apos;t have an account?</span>
              <Link to={"/register"} className="text-[#475387] hover:underline font-semibold">SignUp here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
