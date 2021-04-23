import React from 'react'
import { useForm } from "react-hook-form"
import TextareaAutosize from 'react-autosize-textarea'//npm install --save react-autosize-textarea

const Email = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    
    const onSubmit = (data, r) => {
        alert(`Thank you for your message ${data.email}`);
        const templateId = 'template_m2mu22v';
        const serviceID = 'gmail_MAT07112017';
        sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
        r.target.reset();
    }

     const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }


    return (
        <div className="form-group">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form">
                    <input  type="text" {...register("name", { required: true, maxLength: 20 })} required />
                        <div className="underline"></div>
                        <label for="name" className="label-name">
                            <span className="content-name" style={{color:'black', fontWeight:'400'}}>{errors.name && "Required Max Lenght 20"}</span>
                            <span className="content-name">{!errors.name && "Input Fullname"}</span>
                        </label>   
                </div>
                <div className="form">                
                    <input type="text" {...register("email", { required: true, patter:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} required />
                        <div className="underline"></div>
                        <label for="email" className="label-name">
                            <span className="content-name" style={{color:'black', fontWeight:'400'}}>{errors.email && "Required Valid Email"}</span>
                            <span className="content-name">{!errors.email && "Input Valid Email"}</span>
                        </label>
                </div>
                <div className="form" >
                    <TextareaAutosize className="form-control textarea " maxRows={4} required {...register("comment", {required:true})} />    
                        <div className="underline"></div>
                        <label for="comment" className="label-name">
                            <span className="content-name" style={{color:'black', fontWeight:'400'}}>{errors.comment && "Input some comment"}</span>
                            <span className="content-name">{!errors.comment && "Comment"}</span>
                        </label>
                </div>
                <button className="btn btn-block btn-success" onClick={handleSubmit(onSubmit)} > Send Email</button>
            </form>
        </div>
    )
}

export default Email