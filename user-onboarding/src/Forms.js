import React from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';

const Forms = ({touched, errors}) => {

    return(
        <div className="userForm">
            <Form>
                <Field type="text" name="name" placeholder="name"  />
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}
                <Field type="text" name="email" placeholder="email"  />
                {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}
                <Field type="text" name="password" placeholder="password"  />
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                <label className="checkboxContainer">
                    <Field type="checkbox" name="termsOfService"  />
                    I agree to the terms of service.
                </label>
                
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}



const FormikUserForm = withFormik ({
    mapPropsToValues({ termsOfService, name, email }){
        return{
            termsOfService: termsOfService || false,
            name: name || "",
            email: email || "",
            password: "",
        }
    }, 
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(2, "Full name please")
            .required("Sorry but we need your name"),
        email: Yup.string()
            .email('a real email please')
            .required("need your email too"),
        password: Yup.string()
            .min(6, 'little longer please')
            .required("can't get in without a password")
    })
})(Forms);

export default FormikUserForm