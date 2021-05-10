const ATMDeposit = ({ onChange, isDeposit }) => {
    return (
        <label className="label huge">
            <h3>{isDeposit ? "Deposit" : "Cash Back"}</h3>
            Deposit:
            <input type="number" onChange={onChange}></input>
            <input type="submit"></input>
        </label>
    );
};

const Account = () => {
    let deposit = 0;
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    let status = `Acount balance $ ${totalState}`

    const handleChange = event => {
        deposit = Number(event.target.value);
    };

    const handleSubmit = (event) => {
        let newTotal = isDeposit ?
            totalState + deposit : totalState - deposit
        setTotalState(newTotal);
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Account Balance {totalState}</h2>
            <button onClick={() => setIsDeposit(true)}>
                Deposit</button>
            <button onClick={() => setIsDeposit(false)}>
                Cash Back</button>
            <ATMDeposit
                onChange={handleChange}
                isDeposit={isDeposit} />
        </form>
    );
};

ReactDOM.render(<Account />, document.getElementById("root"));