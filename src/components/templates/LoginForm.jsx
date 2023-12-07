const Login = () => {
  return (
    <div className="flex flex-col bg-silver w-[450px] rounded p-5">
      <div className=" text-center mt-4 mb-8 text-5xl text-warm-grey ">
        Login
      </div>
      <lable className="mb-2 ms-2 text-charcoal-grey  ">Email</lable>
      <input className="mb-6 rounded p-2 border border-1 border-[#dddddd]" />
      <label className="mb-2 ms-2 text-charcoal-grey ">Password</label>
      <input className="mb-3 rounded p-2 border border-1 border-[#dddddd]" />
      <div className="mb-7 ms-2">error message</div>
      <button className="bg-water-blue text-white rounded py-2 ">Login</button>
      <div className="mt-4 mb-5 ms-2 text-charcoal-grey">
        Dont have account?{" "}
        <span className="font-bold cursor-pointer  ms-1 text-charcoal-grey">
          Register
        </span>
      </div>
    </div>
  );
};
export default Login;
