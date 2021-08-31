(function () {
  "use strict";

  const app = document.querySelector("#app");

  let keyPressed = {
    a: false,
    s: false,
    Control: false,
    ArrowLeft: false,
    ArrowRight: false,
  };

  window.addEventListener("keydown", (e) => {
    keyPressed[e.key] = true;

    if (keyPressed["Control"]) {
      e.preventDefault();
      if (keyPressed["ArrowLeft"]) {
        e.preventDefault();
        app.innerHTML = `<h2>${keyPressed}</h2>`;
      }
    }

    if (keyPressed["Control"]) {
      e.preventDefault();
      if (keyPressed["ArrowRight"]) {
        e.preventDefault();
        app.innerHTML = `<h2>${keyPressed}</h2>`;
      }
    }
    console.log(keyPressed);
  });

  window.addEventListener("keypress", (e) => {
    keyPressed[e.key] = true;

    if (keyPressed["a"]) {
      if (keyPressed["s"]) {
        e.preventDefault();
        app.innerHTML = `<h2>${keyPressed}</h2>`;
      }
    }

    if (keyPressed["Control"]) {
      if (keyPressed["ArrowLeft"]) {
        e.preventDefault();
        app.innerHTML = `<h2>${keyPressed}</h2>`;
      }
    }

    if (keyPressed["Control"]) {
      if (keyPressed["ArrowRight"]) {
        e.preventDefault();
        app.innerHTML = `<h2>${keyPressed}</h2>`;
      }
    }
    console.log(keyPressed);
  });

  window.addEventListener("keyup", () => {
    app.innerHTML = `<h2>Commands</h2>`;
    keyPressed = {
      a: false,
      s: false,
      Control: false,
      ArrowLeft: false,
      ArrowRight: false,
    };
  });
})();
