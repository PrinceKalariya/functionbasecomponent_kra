import React from "react";

function Alert(props) {
  
  const capitalizeFirstLatter = (word) => {
    const wordInLowerCase = word.toLowerCase();
    return wordInLowerCase.charAt(0).toUpperCase() + wordInLowerCase.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalizeFirstLatter(props.alert.type)}</strong> :{" "}
          {props.alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
