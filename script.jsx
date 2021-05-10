const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
    return (
        <label className="label huge">
            <h3>{isDeposit ? "Deposit" : "Cash Back"}</h3>
            Deposit:
            <input type="number" onChange={onChange}></input>
            <input type="submit" disabled={!isValid}></input>
        </label>
    );
};

const Account = () => {
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState('');
    const [validTransaction, setValidTransaction] = React.useState(false);

    let status = `Acount balance $ ${totalState}`

    const handleChange = event => {
        setDeposit(Number(event.target.value));

        if (Number(event.target.value) <= 0) {
            setValidTransaction(false);
            return;
        }

        if (atmMode === "Cash Back" && Number(event.target.value) > 0) {
            setValidTransaction(false);
        } else {
            setValidTransaction(true);
        }
    };


    const handleSubmit = (event) => {
        let newTotal = isDeposit ?
            totalState + deposit : totalState - deposit
        setTotalState(newTotal);
        event.preventDefault();
    };

    const handleModeSelect = (event) => {
        setAtmMode(event.target.value);
        if (event.target.value === 'Deposit') {
            setIsDeposit(true);
        } else {
            setIsDeposit(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Account Balance {totalState}</h2>
            <label>Select an action below to continue</label>
            <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
                <option id="no-selection" value=""></option>
                <option id="deposit-selection" value="Deposit">Deposit</option>
                <option id="cashback-selection" value="Cash Back">Cash Back</option>
            </select>
            {atmMode && <ATMDeposit
                onChange={handleChange}
                isDeposit={isDeposit}
                isValid={validTransaction} />}
        </form>
    );
};

ReactDOM.render(<Account />, document.getElementById("root"));