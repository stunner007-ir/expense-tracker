import ExpenseItem from './components/ExpenseItem'

function App() {

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={"Car Insurance"}
        amount={50}
        date={new Date(2023, 2, 28)}
      ></ExpenseItem>
    </div>
  );
}

export default App;
