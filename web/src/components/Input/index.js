import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from '../InputField'; 
import './input.css';

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
    }
      
    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    return (
      <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mc__title">Join our waitlist for exclusive access.</h3>
        <div className="mc__field-container">
          <InputField
            label="First Name"
            onChangeHandler={setFirstName}
            type="text"
            value={firstName}
            placeholder="Jane"
            isRequired
          />

          <InputField
            label="Last Name"
            onChangeHandler={setLastName}
            type="text"
            value={lastName}
            placeholder="Doe"
            isRequired
          />

          <InputField
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />

        </div>

        <InputField
          label="subscribe"
          type="submit"
          formValues={[email, firstName, lastName]}
        />
      </form>
    );
};

const Input = props => {
    const MAILCHIMP_U = `f9fafc036633095ebfcbcb2fa"`; 
    const MAILCHIMP_ID = `6d780a4b8c`;
    const postUrl = `https://lgrpro.us5.list-manage.com/subscribe/post?u=${MAILCHIMP_U}&id=${MAILCHIMP_ID}`;
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe 
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default Input;