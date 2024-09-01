const RatingApp = {
    rated: null,
    rateChoices: document.querySelectorAll(".choice"),
    submitBtn: document.getElementById("submit"),

    // Add and Remove functions
    addClass(element, className) {
        element.classList.add(className);
    },
    removeClass(element, className) {
        element.classList.remove(className);
    },

    // States functions
    choicesStates() {
        this.rateChoices.forEach(choice => {
            choice.addEventListener("mouseover", () => {
                this.addClass(choice, "choiceHovered");
            });
            choice.addEventListener("mouseout", () => {
                this.removeClass(choice, "choiceHovered");
            });
            choice.addEventListener("click", (e) => {
                this.rateChoices.forEach(actived => {
                    this.removeClass(actived, "choiceActived");
                });
                this.addClass(choice, "choiceActived");
                this.rated = e.target.textContent;
            });
        });
    },
    submitStates() {
        this.submitBtn.addEventListener("mouseover", () => {
            this.addClass(this.submitBtn, "submitHovered");
        });
        this.submitBtn.addEventListener("mouseout", () => {
            this.removeClass(this.submitBtn, "submitHovered");
        });
    },

    // Init function
    initialize() {
        this.choicesStates();
        this.submitStates();
    }
};

RatingApp.initialize();