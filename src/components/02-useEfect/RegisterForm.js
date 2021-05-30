import React from "react";
import { useForm } from "react-hook-form";
import './style.css';

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleRegistration = (data) => {
        setTimeout(() => {
            console.log('envio el formulario');
            console.log(data);
        }, 4000);
    }

    const handleError = (errors) => {
        console.log('Errores:', errors);;
    }

    return (
        <div>
            <h1>Register Form</h1>
            <hr />
            <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="nombre"
                        {...register('name', {
                            required: true,
                            maxLength: 100
                        })} />
                    <small className="text-danger">
                        {errors.name?.type === 'required' && <p>name is required</p>}
                        {errors.name?.type === 'maxLength' && <p>no debe tener mas de 100 caracteres</p>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="correo"
                        {...register('email', {
                            required: true,
                            maxLength: 100,
                            validate: {
                                'esCorreo': (value) => value.includes('@')
                            }
                        })} />
                    <small className="text-danger">
                        {errors.email?.type === 'required' && <p>correo requerido</p>}
                        {errors.email?.type === 'maxLength' && <p>no debe tener mas de 100 caracteres</p>}
                        {errors.email?.type === 'esCorreo' && <p>debe tener @</p>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="***"
                        {...register('password', {
                            required: true,
                            minLength: 6
                        })} />
                    <small className="text-danger">
                        {errors.password?.type === 'required' && <p>password requerido</p>}
                        {errors.email?.type === 'minLength' && <p>Debe tener al menos 6 caracteres</p>}
                    </small>
                </div>

                <button
                    className="btn btn-outline-primary"
                    type="submit">
                    Enviar
                </button>

            </form>
        </div>
    );
}