class Checklist {
    constructor(props) {
        this.state = {
            selectedEvidence: [],
            ignoredEvidence: [],
            evidence: props.evidence,
            ghosts: []
        };
    }

    init() {
        this.buildEvidenceFilter();
        this.buildGhostList();
    }

    addGhost(Ghost) {
        this.state.ghosts.push(Ghost);
    }

    buildEvidenceFilter() {
        const evidenceCheckList = document.getElementById('evidence-checklist');

        let resetButton = document.getElementById('reset-btn');
        resetButton.addEventListener('click', () => {
            let selected = document.querySelectorAll('#evidence-checklist li input[type="checkbox"]:checked');
            let unselected = document.querySelectorAll('#evidence-checklist li input[type="checkbox"]:not(:checked)');
            let indeterminate = document.querySelectorAll('#evidence-checklist li input[type="checkbox"]:indeterminate');

            selected.forEach(item => {
                item.checked = false;
            });

            unselected.forEach(item => {
                item.disabled = false;
            });

            indeterminate.forEach(item => {
                item.indeterminate = false;
            });

            this.state.selectedEvidence = [];
            this.buildGhostList();
        });

        Object.keys(this.state.evidence).map(item => {
            let listItem = document.createElement('li');

            // Create Checkbox
            let inputItem = document.createElement('input');
            inputItem.type = 'checkbox';
            inputItem.id = this.state.evidence[item];
            inputItem.name = this.state.evidence[item];
            inputItem.value = this.state.evidence[item];

            inputItem.addEventListener('click', (e) => {
                if (e.target.readOnly) {
                    e.target.checked = e.target.readOnly = false;
                } else if (!e.target.checked) {
                    e.target.readOnly = e.target.indeterminate = true;
                }

                let selected = document.querySelectorAll('#evidence-checklist li input[type="checkbox"]:checked');
                let unselected = document.querySelectorAll('#evidence-checklist li input[type="checkbox"]:not(:checked)');
                let indeterminate = document.querySelectorAll('#evidence-checklist li input[type="checkbox"]:indeterminate');

                // Store selected evidence in app state
                this.state.selectedEvidence = [];
                selected.forEach(item => {
                    this.state.selectedEvidence.push(item.value);
                });

                // Store ignored evidence in app state
                this.state.ignoredEvidence = [];
                indeterminate.forEach(item => {
                    this.state.ignoredEvidence.push(item.value);
                });

                // Disable unselected checkboxes when you hit 3 selections
                unselected.forEach(item => {
                    item.disabled = selected.length >= 3;
                });

                this.buildGhostList();
            });

            // Create Label
            let labelItem = document.createElement('label');
            labelItem.htmlFor = this.state.evidence[item];
            labelItem.innerText = this.state.evidence[item];

            // Build HTML
            listItem.appendChild(inputItem);
            listItem.appendChild(labelItem);
            evidenceCheckList.appendChild(listItem);
        });
    }

    createGhostCard(ghost) {
        let card = document.createElement('div');
        card.classList.add('card');

        let cardTitle = document.createElement('p');
        cardTitle.innerHTML = "<strong>Ghost: </strong>" + ghost.name;

        let evidenceList = document.createElement('ul');
        evidenceList.classList.add('list-style-none');

        let evidenceListHeading = document.createElement('p');
        evidenceListHeading.innerHTML = '<strong>Evidence: </strong>';

        ghost.evidence.forEach(item => {
            let listItem = document.createElement('li');
            let checkMark = document.createElement('i');
            let text = document.createElement('span');
            text.innerText = item;

            checkMark.classList.add("icon");
            if (this.state.selectedEvidence.includes(item)) checkMark.classList.add("fas", "fa-check", "icon-green");

            listItem.appendChild(checkMark);
            listItem.appendChild(text);

            evidenceList.appendChild(listItem);
        });

        let strengths = document.createElement('p');
        strengths.innerHTML = "<strong>Strengths:</strong> " + ghost.strengths;

        let weaknesses = document.createElement('p');
        weaknesses.innerHTML = "<strong>Weaknesses:</strong> " + ghost.weaknesses;

        card.appendChild(cardTitle);
        card.appendChild(evidenceListHeading);
        card.appendChild(evidenceList);
        card.appendChild(strengths);
        card.appendChild(weaknesses);

        return card;
    }

    buildGhostList() {
        let ghostList = document.getElementById('ghosts');
        ghostList.innerHTML = "";

        let includes = (arr, target) => target.every(v => arr.includes(v));
        let notIncludes = (arr, target) => target.every(v => !arr.includes(v))

        let ghostListCopy = [...this.state.ghosts]
            .filter(ghost => includes(ghost.evidence, this.state.selectedEvidence))
            .filter(ghost => notIncludes(ghost.evidence, this.state.ignoredEvidence));

        ghostListCopy.forEach(item => {
            ghostList.appendChild(this.createGhostCard(item));
        });
    }
}

export default Checklist;
