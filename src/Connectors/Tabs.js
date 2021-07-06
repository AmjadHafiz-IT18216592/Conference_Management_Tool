import { useState } from "react";
import "../App.css";
import All from './Alll';
import Approved from './Approved';
import Declined from './Declined';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          All
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Approved
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <All />
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <Approved />
        </div>
      </div>
    </div>
  );
}

export default Tabs;