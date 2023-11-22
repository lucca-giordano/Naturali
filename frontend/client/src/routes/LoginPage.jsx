import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {

  useEffect(() => {
    // Mudar o título da página
    document.title = 'Naturali: Login';
  })

  const navigate = useNavigate();

  const requiredMessage = "Este campo é obrigatório.";
  const passwordMessage = "Sua senha tem no mínimo 6 caracteres.";
  const emailMessage = "Insira um email válido.";
  const toastConfig = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const handleClickLogin = (values) => {
    console.log(values);
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response.data.msgID);
      const msgID = response.data.msgID;
      const msg = response.data.msg;

      {/*
      CÓDIGOS DE MENSAGEM
      msgID == 0: Login realizado com sucesso
      msgID == 1: Email não cadastrado
      msgID == 2: Senha incorreta
    */}

      if (msgID == 0) {
        toast.success(msg, toastConfig);
        navigate('/');
      }
      else if (msgID == 1) {
        toast.error(msg, toastConfig);
      }
      else if (msgID == 2) {
        toast.error(msg, toastConfig);
      }
      else {
        toast.error("Erro desconhecido no login");
      }
    });
  };

  const validationLogin = yup.object().shape({
    email: yup.string().email(emailMessage).required(requiredMessage),
    password: yup.string().min(6, passwordMessage).required(requiredMessage),
  });

  return (

    <div className="login-container">
      <div className="left-section" >

      </div>
      <div className="right-section">
        <h2>Bem vindo de volta!</h2>
        <h3>Faça seu login.</h3>
        <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
          <Form className='login-form'>
            <div className="input-container">
              <ErrorMessage name="email" component="span" className="error-message" />
              <Field type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div className="input-container">
              <ErrorMessage name="password" component="span" className="error-message" />
              <Field type="password" id="password" name="password" placeholder="Senha" />
            </div>
            <div className="form-end">
              <button type="submit">Login</button>
              <p>Ainda não tem conta? <Link to={'/Register'}>Faça uma aqui</Link></p>
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default LoginPage