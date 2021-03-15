import React from "react";

function Options() {
  return (
    <form>
      <div class="form-check" align="center">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Would you like uppercase letters?
        </label>
      </div>

      <div class="form-check" align="center">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Would you like lowercase letters?
        </label>
      </div>

      <div class="form-check" align="center">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Would you like numbers?
        </label>
      </div>

      <div class="form-check" align="center">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Would you like special characters (such as ! @ # ?)?
        </label>
      </div>
    </form>
  );
}

export default Options;

// http://react.tips/radio-buttons-in-reactjs/

//https://getbootstrap.com/docs/4.0/components/alerts/
