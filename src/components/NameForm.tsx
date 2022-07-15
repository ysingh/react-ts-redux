import React, { ChangeEvent } from 'react'

class NameForm extends React.Component<Record<string, unknown>, {value: string}> {
    constructor(props: {}) {
        super(props)

        this.state = {
            value: ''
        }
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.target.value })
    }
}

export default NameForm