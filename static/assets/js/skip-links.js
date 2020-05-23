function skipLink(linkId, targetId) {
    var target = document.getElementById(targetId);
    document.getElementById(linkId).addEventListener('click', function(e) {
      e.preventDefault();
      target.setAttribute('tabindex', '-1');
      target.focus();
    });
  }
  // ...which you can call like this
  skipLink('skip-to-main', 'main');
  skipLink('skip-to-search', 'search');
  skipLink('skip-to-navigation', 'navigation');