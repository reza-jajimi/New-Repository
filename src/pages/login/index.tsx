import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "@/src/components/Inputs/InputField";
import MainLayout from "@/src/components/Layout/MainLayout";
import { BlueBtn, GreenBtn } from "@/src/components/Inputs/ButtonField";
import { useRouter } from "next/router";

const schema = yup
  .object({
    email: yup.string().required("email is Required."),
    password: yup
      .string()
      .required("password is Required.")
      .min(8, "Please enter a password more than 8 character.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .matches(/[0-9]/, "Must Contain Number Character")
      .matches(/[a-z]/, "Must Contain lowercase Character")
      // .matches(/?=.*[!@#\$%\^&\*]/, "Must Contain One Special Case Character")
      .matches(/[A-Z]/, "Must Contain uppercase Character"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  const { push } = useRouter();

  return (
    <MainLayout title="Login user">
      <section>
        <h3 className="text-center text-3xl font-semibold mt-5">Login User</h3>
        <form
          className="max-w-lg mx-auto mt-8 p-10 bg-white/50 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            errors={errors}
            register={register}
            inputName="email"
            inputType="email"
            title="Enter your email:"
          />
          <InputField
            errors={errors}
            register={register}
            inputName="password"
            inputType="password"
            title="Enter your password:"
          />

          <div className="mt-7">
            <GreenBtn btnType="submit" title="Submit" />
            <BlueBtn
              btnType="button"
              title="Register"
              onClick={() => push("/register")}
            />
          </div>
        </form>
      </section>
    </MainLayout>
  );
};

export default Login;
