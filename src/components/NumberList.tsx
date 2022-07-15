function NumberList(props: { numbers: Number[] }) {
    const numbers = props.numbers
    const listItems = numbers.map(number => <li key={number.toString()}>{number.toString()}</li>)

    return <ul>{listItems}</ul>
}

export default NumberList