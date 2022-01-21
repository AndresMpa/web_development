const resultInput = document.querySelector("#resultInput");
const textInput = document.querySelector("#textInput");
const option = document.querySelector("#option");

const loadInfo = () => {
  Object.keys(target).forEach((item) => {
    let optionLabel = document.createElement("p");
    optionLabel.classList.add("optionLabel");
    optionLabel.innerHTML = `${item} `;
    option.appendChild(optionLabel);
  });
};

const target = {
  rojo: () => {
    document.querySelector("html").style.backgroundColor = "red"
    document.querySelector("body").style.backgroundColor = "red"
  },
  verde: () => {
    document.querySelector("html").style.backgroundColor = "green"
    document.querySelector("body").style.backgroundColor = "green"
  },
  azul: () => {
    document.querySelector("html").style.backgroundColor = "blue"
    document.querySelector("body").style.backgroundColor = "blue"
  },
  amarillo: () => {
    document.querySelector("html").style.backgroundColor = "yellow"
    document.querySelector("body").style.backgroundColor = "yellow"
  },
  naranja: () => {
    document.querySelector("html").style.backgroundColor = "orange"
    document.querySelector("body").style.backgroundColor = "orange"
  },
  violeta: () => {
    document.querySelector("html").style.backgroundColor = "violet"
    document.querySelector("body").style.backgroundColor = "violet"
  },
  rosa: () => {
    document.querySelector("html").style.backgroundColor = "pink"
    document.querySelector("body").style.backgroundColor = "pink"
  },
  purpura: () => {
    document.querySelector("html").style.backgroundColor = "purple"
    document.querySelector("body").style.backgroundColor = "purple"
  },
  blanco: () => {
    document.querySelector("html").style.backgroundColor = "white"
    document.querySelector("body").style.backgroundColor = "white"
  },
  recarga: () => {
    window.location.reload();
  },
};

const handler = {
  set(obj, prop, value) {
    if (value in obj) {
      obj[value]();
    }

    const suggestion = Object.keys(obj).find((key) => {
      return Levenshtein.get(key, value) <= 3;
    });

    if (suggestion) {
      obj[suggestion]();
      return suggestion
    }
  },
};

const proxyGenerator = () => {
  return new Proxy(target, handler);
}

const proxy = proxyGenerator()

loadInfo();

textInput.addEventListener("change", () => {
  proxy.value = textInput.value;
  resultInput.value = proxy.value || "";
  textInput.value = ""
});
