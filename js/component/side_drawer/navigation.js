
component.side_drawer.navigation = function(){
  component.apply(this, arguments);
};
$.inherits(component.side_drawer.navigation, component.side_drawer);

/**
 * Set contents
 * Header, Body, and Footer
 */

component.side_drawer.navigation.prototype.decorate_header = function(parent){
  var self = this;
  var container = document.createElement('div');
  container.classList.add('side-nav-header');

  css.apply(container, {
    'padding': '0px 10px',
  });

  // main title
  var anchor = document.createElement('a');
  anchor.classList.add('link');

  anchor.addEventListener('click', function() {
    new layer.home().render();
    self.hide();
  });

  var title = document.createElement('h1');
  title.innerText = 'calp.io';

  // email contact
  var email_contact = document.createElement('a');
  email_contact.innerText = 'caleb@calp.io';

  email_contact.classList.add('email-link');

  email_contact.setAttribute('href', 'mailto:caleb@calp.io');
  email_contact.setAttribute('target', '_blank');

  anchor.appendChild(title);
  container.appendChild(anchor);
  container.appendChild(email_contact);

  parent.appendChild(container);
};

component.side_drawer.navigation.prototype.decorate_body = function(parent){
  var self = this;
  var nav_list = new component.list();

  var list_contents = [
    {
      'name': 'Projects',
      'icon': 'rocket',
      'action': (function() {
        self.hide();
        new layer.projects().render();
      }),
    },
    {
      'name': 'Scrapyard',
      'icon': 'bug',
      'action': (function() {
        self.hide();
        new layer.scrapyard().render();
      }),
    },
    {
      'name': 'Yours truly',
      'icon': 'person',
      'action': (function() {
        self.hide();
        new layer.about().render();
      }),
    }
  ];

  nav_list.set_contents(list_contents);
  nav_list.render(parent);
};

component.side_drawer.navigation.prototype.decorate_footer = function(parent){
  // social media links
  var container = document.createElement('div');

  css.apply(container, {
    'display': 'flex',
    'flex-direction': 'column',
    'position': 'absolute',
    'bottom': '20px',
    'left': '8px',
  });

  // github
  var github_icon = forge.make('icon', {
    'file_name': 'github',
    'theme': 'dark',
  });

  css.apply(github_icon, {
    'height': '38px',
    'cursor': 'pointer',
  });

  github_icon.addEventListener('click', function() {
    window.open('https://github.com/cajrowe94', '_blank');
  });

  container.appendChild(github_icon);

  // linkedin
  var linkedin_icon = forge.make('icon', {
    'file_name': 'linkedin',
    'theme': 'dark',
  });

  css.apply(linkedin_icon, {
    'height': '38px',
    'cursor': 'pointer',
    'margin-top': '3px',
  });

  linkedin_icon.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/calebrowe94/', '_blank');
  });

  container.appendChild(linkedin_icon);


  // youtube
  var youtube_icon = forge.make('icon', {
    'file_name': 'youtube',
    'theme': 'dark',
  });

  css.apply(youtube_icon, {
    'height': '38px',
    'cursor': 'pointer',
    'margin-top': '3px',
  });

  youtube_icon.addEventListener('click', function() {
    window.open('https://www.youtube.com/channel/UCtU68pn8gpS72gOd_FGladg/', '_blank');
  });

  container.appendChild(youtube_icon);

  parent.appendChild(container);
};

component.side_drawer.navigation.prototype.get_class = function() {
  return ['component', 'side_drawer', 'navigation'];
};
