class AdvantagesDescriptionController {
  constructor() {
    this.addListener();
    this.findBeforeElem();
  }

  findElementForListener() {
    return document.querySelector('.advantages__section')
  }

  findElementToShowDescription() {
    return document.querySelector('.iconsInfo__text')
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
        break;
      case 'dns':
        this.getDescription('dns');
        break;
      case 'domainCertificate':
        this.getDescription('domainCertificate');
        break;
      case 'autoExtension':
        this.getDescription('autoExtension');
        break;
      case 'cloudStorage':
        this.getDescription('cloudStorage');
        break;
      case 'freeSslCertificate':
        this.getDescription('freeSslCertificate');
        break;
      case 'dnsSec':
        this.getDescription('dnsSec');
        break;
      case 'redirection':
        this.getDescription('redirection');
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

  findBeforeElem(){
    console.log(document.querySelector('.iconsInfo'));

  }
}