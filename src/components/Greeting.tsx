function UserGreeting(props: any) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props: any) {
    return <h1>Please sign up</h1>
}

function Greeting(props: { isLoggedIn: boolean}) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    }   
    return <GuestGreeting />
}

export default Greeting