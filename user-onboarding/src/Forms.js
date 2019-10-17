import React from 'react';
import { Form, Field, withFormik } from "formik";

const UserForm = () => {

    return(
        <div className="userForm">
            <Form>
                <Field type="text" name="name" placeholder="name"  />
                <Field type="text" name="email" placeholder="email"  />
                <Field type="text" name="password" placeholder="password"  />
                <label className="checkboxContainer">
                    I agree to the terms of service.
                    <Field component="checkbox" name="termsOfService"  />
                </label>
                <Field type="" name=""  />       
            </Form>
        </div>
    )
}



const FormikUserForm = withFormik ({
    mapPropsToValues({ termsOfService, name, email, password }){
        return{
            termsOfService: termsOfService || false,
            name: name || "",
            email: email || "",
            password: password || "",
        }
    }
})(UserForm);

export default FormikUserForm