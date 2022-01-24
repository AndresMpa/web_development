const campo = document.querySelectorAll(".campo");
const test = document.querySelector("#test");

const actions = {
  hola: () => {
    test.style.color = "blue";
  },
  fondo: () => {
    test.style.background = "gray";
  },
  aparece: () => {
    test.style.display = "flex";
    test.classList = "";
  },
  desaparece: () => {
    test.style.display = "none";
    test.classList = "";
  },
  rebota: () => {
    test.classList = "animate__animated animate__bounce animate__infinite";
  },
  salta: () => {
    test.classList = "animate__animated animate__zoomIn animate__infinite";
  },
  sorpresa: () => {
    test.classList = "animate__animated animate__tada animate__infinite";
  },
  largo: () => {
    test.classList = "animate__animated animate__bounceOutUp";
  },
  sigilo: () => {
    test.classList = "animate__animated animate__flipOutY";
  },
  regresa: () => {
    test.style.display = "flex";
    test.classList = "";
  },
  limpia: () => {
    test.style.background = "white";
    test.textContent = "";
    test.value = "";
  },
  "campo 401": (transcription) => {
    let from = transcription.indexOf("401");
    let to = transcription.length;
    campo[0].value = transcription.substring(from + 3, to);
  },
  "campo 404": (transcription) => {
    let from = transcription.indexOf("404");
    let to = transcription.length;
    campo[1].value = transcription.substring(from + 3, to);
  },
};

const handler = {
  set(obj, prop, value) {
    Object.keys(obj).forEach((item) => {
      if (value.includes(item)) {
        obj[item](value);
      }

      let suggestion = Object.keys(obj).find((key) => {
        return Levenshtein.get(key, value) <= 3;
      });

      if (suggestion) {
        obj[suggestion](value);
        return suggestion;
      }
    });
  },
};

export const proxyGenerator = () => {
  return new Proxy(actions, handler);
};
