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
        code: `document.querySelectorAll('.Box-row--unread a.js-navigation-open').forEach(elem => window.open(elem.href, '_blank'))`
      }
    );
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('show-comment-summary').addEventListener('click', (event) => {
    chrome.tabs.executeScript(null,
      {
        code: `document.querySelectorAll('.Details-element').forEach(elem => !elem.open && elem.querySelector('summary').click())`
      }
    );
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('hide-comment-summary').addEventListener('click', (event) => {
    chrome.tabs.executeScript(null,
      {
        code: `document.querySelectorAll('.Details-element').forEach(elem => elem.open && elem.querySelector('summary').click())`
      }
    );
  });
});
