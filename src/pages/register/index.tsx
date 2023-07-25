import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "@/src/components/Inputs/InputField";
import MainLayout from "@/src/components/Layout/MainLayout";
import { BlueBtn, GreenBtn } from "@/src/components/Inputs/ButtonField";

const schema = yup
  .object({
    email: yup.string().required("email is Required."),
    phone: yup
      .string()
      .min(11, "Please enter a phone number 11 character.")
      .max(11, "Please enter a phone number 11 character.")
      .required("phone number is Required."),
    password: yup
      .string()
      .required("password is Required.")
      .min(8, "Please enter a password more than 8 character.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .matches(/[0-9]/, "Must Contain Number Character")
      .matches(/[a-z]/, "Must Contain lowercase Character")
      // .matches(/?=.*[!@#\$%\^&\*]/, "Must Contain One Special Case Character")
      .matches(/[A-Z]/, "Must Contain uppercase Character"),
    repeatPassword: yup.string().required("repeat password is Required."),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => alert(JSON.stringify(data));

  return (
    <MainLayout title="Register user">
      <section>
        <h3 className="text-center text-3xl font-semibold mt-5">
          Register User
        </h3>
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
            inputName="phone"
            inputType="number"
            title="Enter your Phone number:"
          />
          <InputField
            errors={errors}
            register={register}
            inputName="password"
            inputType="password"
            title="Enter your password:"
          />
          <InputField
            errors={errors}
            register={register}
            inputName="repeatPassword"
            inputType="password"
            title="Repeat your password:"
          />

          <div className="mt-7">
            <GreenBtn btnType="submit" title="Register" />
          </div>
        </form>
      </section>
    </MainLayout>
  );
};

export default Register;
