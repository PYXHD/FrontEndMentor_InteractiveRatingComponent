const RatingApp = {
    rated: null,
    finalRate: document.getElementById("finalRate"),
    rateChoices: document.querySelectorAll(".choice"),
    submitBtn: document.getElementById("submit"),
    ratingContainer: document.getElementById("rating"),
    thanksContainer: document.getElementById("thanks"),

    // Add and Remove functions
    addClass(element, className) {
        element.classList.add(className);
    },
    removeClass(element, className) {
        element.classList.remove(className);
    },

    // Toggle containers function
    toggleContainers(activeElement, inactiveElement) {
        this.addClass(inactiveElement, "unactiveContainer");
        this.removeClass(inactiveElement, "activeContainer");
        this.addClass(activeElement, "activeContainer");
        this.removeClass(activeElement, "unactiveContainer");
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
        this.submitBtn.addEventListener("click", () => {
            if (this.rated === null) {
                alert("Veuillez sélectionner une note")
            } else {
                this.toggleContainers(this.thanksContainer, this.ratingContainer);

                this.finalRate.textContent = `${this.rated}`;
            }
        })
    },

    // Init function
    initialize() {
        this.choicesStates();
        this.submitStates();
    }
};

RatingApp.initialize();