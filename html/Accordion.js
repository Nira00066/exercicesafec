document.addEventListener("DOMContentLoaded", () => {
  new Accordion(".accordion");
});
// 
export default class Accordion {
  constructor(selector) {
    this.accordion = document.querySelector(selector);
    this.blocs = this.accordion.querySelectorAll(".accordion__bloc");
    this.allowMultiple = this.accordion.dataset.multiple === "true";

    this.init();
  }

  init() {
    this.blocs.forEach((bloc) => {
      let title = bloc.querySelector(".accordion__title");

      title.addEventListener("click", () => {
        if (bloc.classList.contains("active")) {
          this.closeBloc(bloc);
        } else {
          if (!this.allowMultiple) this.closeAll();
          this.openBloc(bloc);
        }
      });

      // Si déjà actif au chargement
      if (bloc.classList.contains("active")) {
        this.setHeight(bloc);
      }
    });
  }

  openBloc(bloc) {
    bloc.classList.add("active");
    this.setHeight(bloc);
  }

  closeBloc(bloc) {
    bloc.classList.remove("active");
    this.resetHeight(bloc);
  }

  closeAll() {
    this.blocs.forEach((b) => {
      this.closeBloc(b);
    });
  }

  setHeight(bloc) {
    let content = bloc.querySelector(".accordion__answer");
    let wrapper = bloc.querySelector(".accordion__answer-bloc");
    wrapper.style.height = content.clientHeight + "px";
  }

  resetHeight(bloc) {
    let wrapper = bloc.querySelector(".accordion__answer-bloc");
    wrapper.style.height = 0;
  }
}
