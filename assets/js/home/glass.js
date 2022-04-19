const glassContainer = document.querySelector("#glass_container");

// 리액트 컴포넌트처럼 사용
class CustomGlass extends HTMLElement {
    connectedCallback() {
        const categoryIcon = {
            "employee": "fa-users",
            "supply": "fa-box"
        };

        const subject = this.getAttribute("glass-subject");
        const paragraph = document.createElement("p");
        const icon = document.createElement("i");
        const link = document.createElement("a");

        link.href = `/${subject}`;
        icon.className = "fa solid";
        paragraph.textContent = subject;
        icon.classList.add(categoryIcon[subject]);

        this.id = "glass";
        this.appendChild(icon);
        this.appendChild(paragraph);

        this.addEventListener("click", () => {
            window.location.href = `/${subject}`;
        });
    }
};

customElements.define("glass-item", CustomGlass);