import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [selectButton, setSelectButton] = useState(false);

  return (
    <>
      <div>
        {selectButton === true && (
          <>
            <Alert onClose={() => setSelectButton(false)}>My alert</Alert>
          </>
        )}
        <Button color="primary" onClick={() => setSelectButton(true)}>
          My Button
        </Button>
      </div>
    </>
  );
}

export default App;
