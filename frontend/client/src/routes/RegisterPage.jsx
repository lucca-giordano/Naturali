// RegisterPage.jsx
import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RegisterPage = () => {

  useEffect(() => {
    // Mudar o título da página
    document.title = 'Naturali: Registre-se';
  })

  const favicon = document.querySelector('link[rel="icon"]');
  favicon.href = '../assets/img/logoSmall.ico';

  const navigate = useNavigate();

  const requiredMessage = "Este campo é obrigatório.";
  const emailMessage = "Insira um email válido.";
  const passwordMessage = "Sua senha precisa ter no mínimo 6 caracteres.";
  const confirmPasswordMessage = "Suas senhas não coincidem.";
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

  const handleClickRegister = (values) => {
    console.log(values);
    Axios.post("http://localhost:3001/register", {
      name: values.fullName,
      email: values.email,
      password: values.password,
    }).then((response) => {

      console.log(response);
      const msgID = response.data.msgID;
      const msg = response.data.msg;

      {/*
      CÓDIGOS DE MENSAGEM
      msgID == 0: Conta criada com sucesso
      msgID == 1: Conta já cadastrada
    */}

      if (msgID == 0) {
        toast.success(msg, toastConfig);
        navigate('/');
      }
      else if (msgID == 1) {
        toast.error(msg, toastConfig);
      }
      else {
        toast.error("Erro desconhecido no registro", toastConfig);
      }

    });
  };
  

  const validationRegister = yup.object().shape({
    fullName: yup.string().required(requiredMessage),
    email: yup.string().email(emailMessage).required(requiredMessage),
    password: yup.string().min(6, passwordMessage).required(requiredMessage),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], confirmPasswordMessage).required(requiredMessage),
  });


  return (
    <div className="register-container">
      <div className="left-section" >

      </div>
      <div className="right-section">
        <h2>Prazer em te conhecer!</h2>
        <h3>Nos conte um pouco sobre você.</h3>
        <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
          <Form className='register-form'>
            <div className='register-form-group'>
              <div className="input-container">
                <ErrorMessage name="fullName" component="span" className="error-message" />
                <Field type="text" id="fullName" name="fullName" placeholder="Nome Completo" />
              </div>
              <div className="input-container">
                <ErrorMessage name="email" component="span" className="error-message" />
                <Field type="email" id="email" name="email" placeholder="Email" />
              </div>
              <div className="input-container">
                <ErrorMessage name="password" component="span" className="error-message" />
                <Field type="password" id="password" name="password" placeholder="Senha" />
              </div>
              <div className="input-container">
                <ErrorMessage name="confirmPassword" component="span" className="error-message" />
                <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Repita a Senha" />
              </div>
              <div className="form-end">
                <button type="submit">Registrar</button>
                <p>Já tem uma conta? <Link to={'/login'}>Faça login aqui!</Link></p>
              </div>
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
  );
};

export default RegisterPage;