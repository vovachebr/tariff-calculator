import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NotFound extends Component {
    render() {
        return <div>
            <h1>Страница не найдена !</h1>
            <Link to={`/home`}>
                <button className="waves-effect waves-light btn">Вернуться на главную</button>
            </Link>
            </div>

    }
}

export default NotFound;