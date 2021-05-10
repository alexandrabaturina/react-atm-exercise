const ATMDeposit = ({ onChange }) => {
    return (
        <label className="label huge">
            Deposit:
            <input type="number" onChange={onChange}></input>
            <input type="submit"></input>
        </label>
    );
};

const Account = () => {
    let deposit = 0;
    const [totalState, setTotalState] = React.useState(0);
    let status = `Acount balance $ ${totalState}`

    const handleChange = event => {
        deposit = Number(event.target.value);
    };

    const handleSubmit = (event) => {
        setTotalState(totalState + deposit);
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Account Balance {totalState}</h2>
            <ATMDeposit onChange={handleChange}>
                Deposit</ATMDeposit>
        </form>
    );
};

ReactDOM.render(<Account />, document.getElementById("root"));