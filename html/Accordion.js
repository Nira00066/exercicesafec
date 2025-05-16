// document.addEventListener("DOMContentLoaded", () => {
//   new Accordion(".accordion");
// });
// // 
// export default class Accordion {
//   constructor(selector) {
//     this.accordion = document.querySelector(selector);
//     this.blocs = this.accordion.querySelectorAll(".accordion__bloc");
//     this.allowMultiple = this.accordion.dataset.multiple === "true";

//     this.init();
//   }

//   init() {
//     this.blocs.forEach((bloc) => {
//       let title = bloc.querySelector(".accordion__title");

//       title.addEventListener("click", () => {
//         if (bloc.classList.contains("active")) {
//           this.closeBloc(bloc);
//         } else {
//           if (!this.allowMultiple) this.closeAll();
//           this.openBloc(bloc);
//         }
//       });

//       // Si déjà actif au chargement
//       if (bloc.classList.contains("active")) {
//         this.setHeight(bloc);
//       }
//     });
//   }

//   openBloc(bloc) {
//     bloc.classList.add("active");
//     this.setHeight(bloc);
//   }

//   closeBloc(bloc) {
//     bloc.classList.remove("active");
//     this.resetHeight(bloc);
//   }

//   closeAll() {
//     this.blocs.forEach((b) => {
//       this.closeBloc(b);
//     });
//   }

//   setHeight(bloc) {
//     let content = bloc.querySelector(".accordion__answer");
//     let wrapper = bloc.querySelector(".accordion__answer-bloc");
//     wrapper.style.height = content.clientHeight + "px";
//   }

//   resetHeight(bloc) {
//     let wrapper = bloc.querySelector(".accordion__answer-bloc");
//     wrapper.style.height = 0;
//   }
// }
 class Accordion {
	constructor(el) {
		this.el = el;
		this.blocs = el.querySelectorAll('.accordion__bloc');
		this.init();
	}
	
	static closeAll(blocs, except = null) {
		blocs.forEach(bloc => {
			if (bloc !== except) {
				bloc.classList.remove('active');
				bloc.querySelector('.accordion__answer-bloc').style.height = '0';
			}
		});
	}
	
	toggleBloc(bloc) {
		const isOpen = bloc.classList.contains('active');
		const wrapper = bloc.querySelector('.accordion__answer-bloc');
		const content = bloc.querySelector('.accordion__answer');
	
		if (isOpen) {
			bloc.classList.remove('active');
			wrapper.style.height = '0';
		} else {
			Accordion.closeAll(this.blocs, bloc);
			bloc.classList.add('active');
			wrapper.style.height = content.clientHeight + 'px';
		}
	}
	
	init() {
		this.blocs.forEach(bloc => {
		const title = bloc.querySelector('.accordion__title');
		title.addEventListener('click', () => {
			this.toggleBloc(bloc);
		});
	
		// Cas où un bloc est déjà "active" dans le HTML au chargement
		if (bloc.classList.contains('active')) {
			const wrapper = bloc.querySelector('.accordion__answer-bloc');
			const content = bloc.querySelector('.accordion__answer');
			wrapper.style.height = content.clientHeight + 'px';
		}
		});
	}
}
	
// Initialisation dans App.js par exemple
document.querySelectorAll('.accordion').forEach(acc => {
	new Accordion(acc);
});

// Correstion!