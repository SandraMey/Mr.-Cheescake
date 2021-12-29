import React from 'react';
import { useForm } from "react-hook-form";

function ContactsHook() {
    const {
        register,      
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        alert("Votre message a bien été envoyé ! Merci, nous vous répondrons dès que possible.")
    }
    return (
        <form className="contactContainer" onSubmit={handleSubmit(onSubmit)}>
            <input className="emailContact" placeholder="e mail" {...register("email", {required: true})}/>
            {errors.email && <p className="p2">Email is required</p>}
            <textarea className="textareaContact" rows="8" cols="100" placeholder=" Message..." {...register("message", { required: true}) } />
            {errors.message && <p className="p1">This field is required</p>}
            <input className="submitContact" type="submit"/>
        </form >
      
    )
}

export default ContactsHook