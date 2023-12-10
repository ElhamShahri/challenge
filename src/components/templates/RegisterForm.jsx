import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { RegisterService } from "../../services/authService";
import Loading from "../modules/Loading";

const RegisterForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required feild"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        {
          message: "Invalid email",
          excludeEmptyString: false,
        }
      )
      .required("Required feild"),

    password: Yup.string().required("Required feild"),
  });
  const onSubmit = async (values) => {
    console.log(values);
    mutation.mutate({
      username: values.username,
      email: values.email,
      password: values.password,
    });
    console.log(mutation);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const mutation = useMutation(async (user) => {
    const data = await RegisterService(user);

    // console.log(data.data.user.token);
    // localStorage.setItem("isLogin", true);
    // localStorage.setItem("username", data.data.user.username);
    // localStorage.setItem("token", data.data.user.token);

    navigate("/login", {
      replace: true,
    });
  });
  return (
    <form
      className="flex flex-col bg-silver w-[450px] rounded p-5"
      onSubmit={formik.handleSubmit}
    >
      <span className=" text-center mt-4 mb-8 text-5xl text-warm-grey ">
        Register
      </span>
      <label
        className={`mb-2 ms-2 ${
          formik.errors.username && formik.touched.username
            ? `text-brick`
            : `text-charcoal-grey`
        }`}
      >
        User
      </label>
      <input
        className={`mb-2 rounded p-2 border border-1 ${
          formik.errors.username && formik.touched.username
            ? `border-brick outline-brick`
            : `border-[#dddddd] outline-charcoal-grey`
        }`}
        {...formik.getFieldProps("username")}
        name="username"
      />
      <div className="mb-6 ms-2">
        {formik.errors.username && formik.touched.username && (
          <div className="w-full text-brick ">{formik.errors.username}</div>
        )}
      </div>
      <label
        className={`mb-2 ms-2 ${
          formik.errors.email && formik.touched.email
            ? `text-brick`
            : `text-charcoal-grey`
        }`}
      >
        Email
      </label>
      <input
        className={`mb-2 rounded p-2 border border-1 ${
          formik.errors.email && formik.touched.email
            ? `border-brick outline-brick`
            : `border-[#dddddd] outline-charcoal-grey`
        }`}
        {...formik.getFieldProps("email")}
        name="email"
      />
      <div className="mb-6 ms-2">
        {formik.errors.email && formik.touched.email && (
          <div className="w-full text-brick ">{formik.errors.email}</div>
        )}
      </div>
      <label
        className={`mb-2 ms-2 ${
          formik.errors.password && formik.touched.password
            ? `text-brick`
            : `text-charcoal-grey`
        }`}
      >
        Password
      </label>
      <input
        className={`mb-2 rounded p-2 border border-1 ${
          formik.errors.password && formik.touched.password
            ? `border-brick outline-brick`
            : `border-[#dddddd] outline-charcoal-grey`
        }`}
        {...formik.getFieldProps("password")}
        name="password"
      />
      <div className="mb-6 ms-2">
        {formik.errors.password && formik.touched.password && (
          <div className="w-full text-brick ">{formik.errors.password}</div>
        )}
      </div>

      {mutation.isLoading ? (
        <Loading />
      ) : (
        <button
          className="bg-water-blue text-white rounded py-2 "
          type="submit"
        >
          Register
        </button>
      )}
      <div className="mt-4 mb-5 ms-2 text-charcoal-grey">
        Already Registered?{" "}
        <span
          className="font-bold cursor-pointer  ms-1 text-charcoal-grey"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </span>
      </div>
    </form>
  );
};
export default RegisterForm;
