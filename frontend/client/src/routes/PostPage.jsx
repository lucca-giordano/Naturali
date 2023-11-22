import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import * as yup from 'yup';
import '../assets/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostPage = () => {

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

  const handleClickPost = (values) => {
    Axios.post("http://localhost:3001/post", {
      title: values.title,
      desc: values.desc,
      content: values.content,
    }).then((response) => {
      console.log(response);
      if (response.data.msgID == 0) {
        toast.success("Post publicado com sucesso!", toastConfig);
      }
      else {
        toast.error("Erro ao publicar post!", toastConfig);
      }
    });
  };

  const validationPost = yup.object().shape({
    title: yup.string().required("Este campo é obrigatório."),
    desc: yup.string(),
    content: yup.string().required("Este campo é obrigatório."),
  });

  return (
    <div className="post-body">
      <div className="post-container">
        <Formik initialValues={{}} onSubmit={handleClickPost} validationSchema={validationPost}>
          <Form className="post-form">
            <div className="input-container">
              <ErrorMessage name="title" component="span" className="error-message" />
              <Field type="text" id="title" name="title" placeholder="Título da publicação" />
            </div>
            <div className="input-container">
              <ErrorMessage name="desc" component="span" className="error-message" />
              <Field as="textarea" id="desc" name="desc" placeholder="Subtitulo da publicação" style={{ height: "181px" }} />
            </div>
            <div className="input-container">
              <ErrorMessage name="content" component="span" className="error-message" />
              <Field as="textarea" id="content" name="content" placeholder="Conteúdo da publicação" style={{ height: "428px" }} />
            </div>
            <div className="buttons-container">
              <button type="submit">Publicar</button>
              <Link to={"/"}><button type="submit">Voltar</button></Link>
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

export default PostPage