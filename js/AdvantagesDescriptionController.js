class AdvantagesDescriptionController {
  constructor() {
    this.addListener();
  }

  findElementForListener() {
    return document.querySelector('.advantages__section')
  }

  findElementToShowDescription() {
    return document.querySelector('.iconsInfo__text')
  }

  setPositionPointerElemOn(left){
    const pointer = document.getElementById('pointer');
    pointer.classList.remove('pointerUnder');
    pointer.classList.add('pointer');
    pointer.style.left=left;
  }

  setPositionPointerElemUnder(left){
    const pointer = document.getElementById('pointer');
    pointer.classList.remove('pointer');
    pointer.classList.add('pointerUnder');
    pointer.style.left=left;
  }

  getDescription(desc) {
    fetch('js/descriptions.json')
      .then(result => {
        return result.json()
      })
      .then(description => {
        const obj = description[0];
        for (let elem in obj) {
          if (elem === desc) {
            this.insertText(obj[elem]);
          }
        }
      })
  }

  switchDescription(description) {
    switch (description) {
      case 'site':
        this.getDescription('site');
        this.setPositionPointerElemOn('15%');
        break;
      case 'dns':
        this.getDescription('dns');
        this.setPositionPointerElemOn('38%');
        break;
      case 'domainCertificate':
        this.getDescription('domainCertificate');
        this.setPositionPointerElemOn('61%');
        break;
      case 'autoExtension':
        this.getDescription('autoExtension');
        this.setPositionPointerElemOn('84%');
        break;
      case 'cloudStorage':
        this.getDescription('cloudStorage');
        this.setPositionPointerElemUnder('15%');
        break;
      case 'freeSslCertificate':
        this.getDescription('freeSslCertificate');
        this.setPositionPointerElemUnder('38%');
        break;
      case 'dnsSec':
        this.getDescription('dnsSec');
        this.setPositionPointerElemUnder('61%');
        break;
      case 'redirection':
        this.getDescription('redirection');
        this.setPositionPointerElemUnder('84%');
        break;
    }
  }

  addListener() {
    this.findElementForListener().addEventListener('click', (event) => {
      event.preventDefault();
      const description = event.target.getAttribute('data-desc');
      this.switchDescription(description);
    })
  }

  insertText(text) {
    this.findElementToShowDescription().innerText = text;
  }
}