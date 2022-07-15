import React from 'react'
import { Greeting } from '.'

function LoginButton(props: { onClick: () => void }) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props: { onClick: () => void }) {
  return <button onClick={props.onClick}>Logout</button>
}

class LoginControl 
    extends React.Component<Record<string, boolean>, { isLoggedIn: boolean }> {
    constructor(props: { isLoggedIn: boolean }) {
        super(props)

        this.state = {
            isLoggedIn: false,
        }
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let button
        if (isLoggedIn) {
            button = <LogoutButton onClick={() => this.handleLogoutClick() } />
        } else {
            button = <LoginButton onClick={() => this.handleLoginClick() } />
        }

        return (
            <>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </>
        )
    }
}

export default LoginControl;