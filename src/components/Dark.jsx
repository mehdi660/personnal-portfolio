import React, { useState } from "react";

const Dark = () => {
  const [darkBtn, setDarkBtn] = useState(false);

  function toggle() {
    if (!darkBtn) {
      setDarkBtn(true);
    } else {
      setDarkBtn(false);
    }
  }
  return (
    <div>
      <button onClick={toggle}>Dark</button>
    </div>
  );
};

export default Dark;
