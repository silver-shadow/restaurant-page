export default loadInitialPage;

function createHeader(text){
    const header = document.createElement('header');
    header.setAttribute('id',"header");
    const h1 = document.createElement('h1');
    h1.textContent = text;
    header.appendChild(h1);
    return header;
}

function createBtn(text){
    const btn = document.createElement('button');
    btn.setAttribute('id',text);
    btn.textContent = text;
    return btn;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.setAttribute('id', "nav");
  
    const homeBtn = createBtn('Home');
    const menuBtn = createBtn('Menu');
    const contactBtn = createBtn('Contact');
  
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
}

function createContent() {
    const pageContent = document.createElement('div');
    pageContent.className = "tab-content";
    return pageContent;
}

function createFooter(text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', "footer");
    const h3 = document.createElement('h3');
    h3.textContent = text;
    footer.appendChild(h3);
    return footer;
  }

function loadInitialPage()
{
    const content = document.getElementById('content');
    const header = createHeader("Basic Bites")
    const nav = createNav();
    const tabContent = createContent();
    const footer = createFooter("The Odin Project");
    content.appendChild(header);
    content.appendChild(nav);
    content.appendChild(tabContent);
    content.appendChild(footer);
}