// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  window.close();
}

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
