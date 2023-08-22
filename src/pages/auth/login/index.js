import React, { useState } from "react";
import NonAuthLayout from "../../../components/layout/NonAuthLayout";
import { InputHolder } from "./style";
import {
  CheckCircleFilled,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import CheckField from "../../../components/fields/CheckField";
import { color } from "../../../assets/color";
import CustomButton, { CustomFormikButton } from "../../../components/fields/CustomButton";
import signBg from "../../../assets/images/signBg.png";
import signBg1 from "../../../assets/images/signBg1.png";
import PasswordChecklist from "react-password-checklist";
import LoginLink from "../../../components/layout/LoginLink";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import { Form } from 'formik-antd'
import { useDispatch } from "react-redux";
import { queryUserLogin } from "../../../services/slices/auth/login";
import * as Yup from 'yup'
import CustomFormikField from "../../../components/fields/CustomFormikField";
import ErrorField from "../../../components/fields/ErrorField";

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [show, setShow] = useState(false);

  const initialValues = { email: '', password: '' }

  const passwordResetValues = { password: '', confirmPassword: '' }

  const validationSchema = Yup.object({
    email: Yup.string().email('Please enter a valid email').required('Please enter your email').matches(/^[A-Za-z0-9._%+-]+@gigxpad\.com$/, 'Invalid email address'),
    password: Yup.string().required('Please enter your password'),
  })
  const onHandleSubmit = async (values) => {
    const data = {
      email: values?.email,
      password: values?.password
    }

    try {
      const res = await dispatch(queryUserLogin(data))
      if (res.payload.status === 'success') {
        setShow(true)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const onResetPassword = async (values) => {
    console.log(values)
  }

  return (
    <div>
      <NonAuthLayout
        image={show ? signBg1 : signBg}
        title={
          show
            ? "Change your account password"
            : "Log in to the Admin Dashboard"
        }
        subText={
          show
            ? "Set a new password for your XPAD account"
            : "Sign in with your credentials to access the dashboard"
        }
      >
        <InputHolder>
          {show ? (
            <div>
              <Formik
                initialValues={passwordResetValues}
                onSubmit={onResetPassword}
              >
                {({ values, handleChange }) => (<Form>
                  <CustomFormikField
                    value={values.password}
                    name='password'
                    type={"password"}
                    placeholder="New Password"
                    className="inputstyle"
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <CustomFormikField
                    type={"password"}
                    name='confirmPassword'
                    value={values.confirmPassword}
                    placeholder="Retype Password"
                    className="inputstyle"
                    onChange={handleChange}
                  />
                  <PasswordChecklist
                    rules={["capital", "specialChar", "number", "minLength"]}
                    minLength={8}
                    value={values.password}
                    valueAgain={values.confirmPassword}
                    style={{ marginTop: "15px" }}
                    iconComponents={{
                      ValidIcon: <CheckCircleFilled style={{ color: "#46E082" }} />,
                      InvalidIcon: (
                        <CheckCircleFilled style={{ color: "#A7B8BF !important" }} />
                      ),
                    }}
                    messages={{
                      minLength: "Must Be at least 8 characters in length",
                      specialChar: "Must Contain Special Character (@$%*&^!)",
                      number: "Must Contain a number",
                      capital: "Must Contain One Capital Letter",
                    }}
                  />
                  <br />
                  <br />
                  <CustomButton bg={color.secondaryColor} text="Log In" onClick={() => navigate("/dashboard")} />
                </Form>)}
              </Formik>
            </div>
          ) : (
            <div>
              <Formik
                initialValues={initialValues}
                onSubmit={onHandleSubmit}
                validationSchema={validationSchema}
              >
                {({ handleChange, handleSubmit, isSubmitting, errors, values, touched }) => {
                  const { email, password } = errors
                  return (
                    <Form onSubmit={handleSubmit}>
                      <CustomFormikField
                        type={"email"}
                        name='email'
                        placeholder="Email Address"
                        bg={color.fieldColor}
                        value={values.email}
                        handleChange={handleChange}
                      />
                      {email ? <ErrorField error={email} /> : null}
                      <br />
                      <br />
                      <CustomFormikField
                        type={"password"}
                        name='password'
                        placeholder="input password"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        className="inputstyle"
                        value={values.password}
                        handleChange={handleChange}
                      />
                      {password ? <ErrorField error={password} /> : null}
                      <br />
                      <br />
                      <CheckField label={"Remember this computer"} /> <br />
                      <br />
                      <CustomFormikButton
                        bg={color.secondaryColor}
                        text="Log In"
                        type='submit'
                        disabled={isSubmitting}
                      />
                    </Form>)
                }
                }
              </Formik>
              <br />
              <br />
              <LoginLink
                text="Unable to login?"
                underline="underline"
                link="/access"
              />
            </div>
          )}
        </InputHolder>
      </NonAuthLayout>
    </div>
  );
}
