import React, { Component } from "react";
import UserCard from './UserCard/UserCard'

export default class UserList extends Component {
    constructor() {
        super();
        this.state = {
            userDB: [
                {
                    id: 0,
                    name: 'user1'
                },
                {
                    id: 1,
                    name: 'user2'
                },
                {
                    id: 3,
                    name: 'user3'
                },
            ],
            active: [],
            activeDB: [],
        }
    }

    activeUsers = (id) => {
        const isUse = [...this.state.activeDB].filter(el => {
            return el.id == id;
        });

        if (isUse.length !== 0) {
            const isUse = [...this.state.activeDB].filter(el => {
                return el.id !== id;
            });

            this.setState({
                activeDB: [...isUse],
            });

            return isUse;
        } else {
            const activeUser = [...this.state.userDB].filter(el => {
                return el.id == id;
            });

            this.setState({
                activeDB: [...this.state.activeDB, ...activeUser],
            });

            return [...this.state.activeDB, ...activeUser];
        }
    }

    toggleClass = (id) => {
        this.setState({
            active: this.activeUsers(id).map(el=>el.id),
        });
    }

    render() {
        return (
            <div className="user-list">
                <ul>
                   {
                        this.state.activeDB.map((el) => {
                            return (
                                <li key={el.id}>{el.name}</li>
                            )
                        })
                   }
                </ul>
                {
                    this.state.userDB.map((el) => {
                        return (
                            <UserCard
                                user={el}
                                id={el.id}
                                key={el.id}
                                active={this.state.active.includes(el.id)}
                                toggle={this.toggleClass}
                            />
                        )
                    })
                }
            </div>
        );
    }
}