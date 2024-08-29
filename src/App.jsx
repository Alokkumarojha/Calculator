import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";

function App() {
  return (
    <>
      <div className={styles.colculatorContainer}>
        <Display></Display>
        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;
