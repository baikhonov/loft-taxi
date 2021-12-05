import React from 'react';

export class Register extends React.Component {

    state = {
        email: "",
        fio: "",
        password: ""
    };

    handleSubmit = event => {
        // event.preventDefault();
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    render() {
        const {email, fio, password } = this.state;
        return <>
            <h1>Регистрация</h1>
            <form onSubmit={this.handleSubmit} action="/map">
                <div>
                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        value={email}
                        id="email"
                        name="email"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="fio">Как вас зовут?*</label>
                    <input
                        type="text"
                        value={fio}
                        id="fio"
                        name="fio"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Придумайте пароль*</label>
                    <input
                        type="password"
                        value={password}
                        id="password"
                        name="password"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit">Зарегистрироваться</button>
                </div>
                <p>Уже зарегистрированы? <button>Войти</button></p>
            </form>
        </>
    }


}