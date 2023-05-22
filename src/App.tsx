import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [selectButton, setSelectButton] = useState(false);

  const handleOnClick = () => {
    setSelectButton(!selectButton);
  };

  return (
    <>
      <div>
        {selectButton === true && (
          <>
            <Alert>
              My alert
              <Button color="close" onClick={() => handleOnClick()}></Button>
            </Alert>
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
