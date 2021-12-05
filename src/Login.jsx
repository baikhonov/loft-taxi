import React from 'react';

export class Login extends React.Component {

    state = {
        email: "",
        password: ""
    };

    handleSubmit = event => {
        // event.preventDefault();
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    render() {
        const {email, password } = this.state;
        return <>
            <h1>Войти</h1>
            <form onSubmit={this.handleSubmit} action="/map">
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={email}
                        id="email"
                        name="email"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input
                        type="password"
                        value={password}
                        id="password"
                        name="password"
                        onChange={this.handleInputChange}
                    />
                </div>
                <button>Забыли пароль?</button>
                <div>
                    <button type="submit">Войти</button>
                </div>
                <p>Новый пользователь? <button>Регистрация</button></p>
            </form>
        </>
    }


}