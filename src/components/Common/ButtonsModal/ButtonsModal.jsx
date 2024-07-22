import React from "react";

const ButtonsModal = ({ title, cancelAction }) => {
  return (
    <div>
      <button type="submit">{title}</button>
      <button type="button" onClick={() => cancelAction(false)}>
        Cancel
      </button>
    </div>
  );
};

export default ButtonsModal;
