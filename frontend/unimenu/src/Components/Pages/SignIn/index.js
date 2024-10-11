

import { Link } from "react-router-dom";
import { ButtonLogin } from "../../Button";
import {  InputLogin } from "../../Input";
import React from "react";
import { Form, Formik, useFormik } from 'formik';




export const SignIn = () =>{
    

    return(<div className="flex h-screen ">
<div style={{backgroundColor:'rgb(3,95,84)'}} className="hidden md:block w-1/2">

</div>
<div  className="flex w-full md:w-2/4 justify-center items-center bg-white">
<Formik initialValues={{
    nome:"",
    email:"",
    setor:"",
    senha:"",

}}>
    {formik =>(
        
<Form onSubmit={formik.handleSubmit} className="w-1/8 max-w-md justify-center items-center  ">
<h2 className="text-2xl text-teal-600 space-y-15  mb-1  ">Cadastro</h2>
<InputLogin label="Nome Completo" type="text" color="teal" id= "nome" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nome}></InputLogin>
<InputLogin label="E-mail" type="text" color="teal" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}></InputLogin>
<InputLogin label="Setor" type="text" color="teal" id="setor" onChange={formik.handleChange} onBlur={formik.handleChange} value={formik.values.setor}></InputLogin>
<InputLogin label="Senha" type="password" color="teal" id="senha" onChange={formik.handleChange}onBlur={formik.handleBlur} value={formik.values.senha}></InputLogin>
<ButtonLogin text="Cadastrar" size="md" className="flex items-center gap-2 px-28 text-base"color="teal"></ButtonLogin>
<Link to="/login"  className="text-sm no-italic text-gray-600 hover:underline font semibold tracking-tight flex justify-center mb-1 ">Voltar</Link>

</Form>
)}
</Formik>
</div>

    </div>)
}