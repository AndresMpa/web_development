const resultInput = document.querySelector("#resultInput");
const textInput = document.querySelector("#textInput");
const option = document.querySelector("#option");

const loadInfo = () => {
  Object.keys(target).forEach((item) => {
    let optionLabel = document.createElement("p");
    optionLabel.classList.add("optionLabel");
    optionLabel.innerHTML = `"${item}" `;
    option.appendChild(optionLabel);
  });
};

const target = {
  red: () => {
    document.querySelector("html").style.backgroundColor = "red";
    document.querySelector("body").style.backgroundColor = "red";
  },
  green: () => {
    document.querySelector("html").style.backgroundColor = "green";
    document.querySelector("body").style.backgroundColor = "green";
  },
  blue: () => {
    document.querySelector("html").style.backgroundColor = "blue";
    document.querySelector("body").style.backgroundColor = "blue";
  },
  yellow: () => {
    document.querySelector("html").style.backgroundColor = "yellow";
    document.querySelector("body").style.backgroundColor = "yellow";
  },
  orange: () => {
    document.querySelector("html").style.backgroundColor = "orange";
    document.querySelector("body").style.backgroundColor = "orange";
  },
  violet: () => {
    document.querySelector("html").style.backgroundColor = "violet";
    document.querySelector("body").style.backgroundColor = "violet";
  },
  pink: () => {
    document.querySelector("html").style.backgroundColor = "pink";
    document.querySelector("body").style.backgroundColor = "pink";
  },
  purple: () => {
    document.querySelector("html").style.backgroundColor = "purple";
    document.querySelector("body").style.backgroundColor = "purple";
  },
  white: () => {
    document.querySelector("html").style.backgroundColor = "white";
    document.querySelector("body").style.backgroundColor = "white";
  },
  clean: () => {
    resultInput.style.display = "flex";
    resultInput.classList = "";
  },
  reload: () => {
    window.location.reload();
  },
  "text jump": () => {
    resultInput.classList =
      "animate__animated animate__zoomIn animate__infinite";
  },
  "text bong": () => {
    resultInput.classList =
      "animate__animated animate__bounce animate__infinite";
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
      resultInput.value = suggestion;
    }
  },
};

const proxyGenerator = () => {
  return new Proxy(target, handler);
};

const proxy = proxyGenerator();

loadInfo();

textInput.addEventListener("click", () => {
  resultInput.value = "";
  textInput.value = "";
});

textInput.addEventListener("change", () => {
  proxy.value = textInput.value;
});
