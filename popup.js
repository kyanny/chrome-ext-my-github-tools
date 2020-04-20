'use strict';

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('open-unread-items').addEventListener('click', (event) => {
    chrome.tabs.executeScript(null,
      {
        file: '/open-unread-items.js'
      }
    );
    window.close();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('show-comment-details').addEventListener('click', (event) => {
    chrome.tabs.executeScript(null,
      {
        file: '/show-comment-details.js'
      }
    );
    window.close();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('hide-comment-details').addEventListener('click', (event) => {
    chrome.tabs.executeScript(null,
      {
        file: '/hide-comment-details.js'
      }
    );
    window.close();
  });
});
