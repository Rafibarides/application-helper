let appData = null;

// go Data.json to make changes
async function loadData() {
  try {
    const response = await fetch("Data.json");
    appData = await response.json();
    console.log("Data loaded successfully:", appData);
  } catch (error) {
    console.error("Error loading data:", error);
    appData = {};
  }
}

async function initializeApp() {
  await loadData();
  setupEventListeners();
  populateDynamicContent();
}

function setupEventListeners() {
  const contactItems = document.querySelectorAll(".contact-item");
  contactItems.forEach((item) => {
    item.addEventListener("click", function () {
      let textToCopy = "";
      if (this.querySelector(".fa-envelope")) {
        textToCopy = appData.contact?.email || "";
      } else if (this.querySelector(".fa-phone")) {
        textToCopy = appData.contact?.phone || "";
      } else if (this.querySelector(".fa-map-marker-alt")) {
        textToCopy = appData.contact?.city || "";
      }

      copyToClipboard(textToCopy, this);
    });
  });

  // Portfolio buttons - will be dynamically created based on Data.json
  setupPortfolioButtons();

  const linkedinBtn = document.querySelector(".copy-btn:not(.bio-copy-btn)");
  if (linkedinBtn) {
    linkedinBtn.addEventListener("click", function () {
      copyToClipboard(appData.social?.linkedin || "", this);
    });
  }

  const bioBtn = document.querySelector(".bio-copy-btn");
  if (bioBtn) {
    bioBtn.addEventListener("click", function () {
      copyToClipboard(appData.bio || "", this);
    });
  }

  setupResumeButtons();
}

function setupPortfolioButtons() {
  const portfolioContainer = document.querySelector(".portfolio-buttons");
  if (portfolioContainer && appData.portfolio) {
    portfolioContainer.innerHTML = "";

    Object.values(appData.portfolio).forEach((portfolioItem) => {
      const button = document.createElement("button");
      button.className = "portfolio-btn";
      button.innerHTML = `<i class="${portfolioItem.icon}"></i> ${portfolioItem.label}`;

      button.addEventListener("click", function () {
        copyToClipboard(portfolioItem.url, this);
      });

      portfolioContainer.appendChild(button);
    });
  }
}

function setupResumeButtons() {
  const resumeSection = document
    .querySelector(".section .section-title .fa-file-alt")
    ?.closest(".section");
  if (resumeSection && appData.resumes) {
    const existingItems = resumeSection.querySelectorAll(".item");

    existingItems.forEach((item) => item.remove());

    appData.resumes.forEach((resume) => {
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `
                <div class="item-content">
                    <div class="item-title">${resume.title}</div>
                    <div class="item-description">${resume.description}</div>
                </div>
                <div class="resume-actions">
                    <button class="action-btn finder">
                        <i class="fas fa-folder-open"></i> Finder
                    </button>
                    <button class="action-btn edit">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                </div>
            `;

      const finderBtn = item.querySelector(".finder");
      const editBtn = item.querySelector(".edit");

      finderBtn.addEventListener("click", function () {
        if (typeof chrome !== "undefined" && chrome.runtime) {
          alert(`File location:\n${resume.filePath}`);
        } else {
          // Web version - show file path alert
          alert(`File location:\n${resume.filePath}`);
        }
      });

      editBtn.addEventListener("click", function () {
        if (typeof chrome !== "undefined" && chrome.tabs) {
          chrome.tabs.create({ url: resume.editUrl });
        } else {
          // Web version - open the link in new tab
          window.open(resume.editUrl, "_blank");
        }
      });

      resumeSection.appendChild(item);
    });
  }
}

function populateDynamicContent() {
  const bioTextElement = document.querySelector(".bio-text");
  if (bioTextElement && appData.bio) {
    const truncatedBio = appData.bio.split(" ").slice(0, 3).join(" ") + "...";
    bioTextElement.textContent = truncatedBio;
  }
}

function copyToClipboard(text, button) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(function () {
        showCopiedFeedback(button);
      })
      .catch(function (err) {
        console.error("Could not copy text: ", err);
        fallbackCopyToClipboard(text, button);
      });
  } else {
    fallbackCopyToClipboard(text, button);
  }
}

function fallbackCopyToClipboard(text, button) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  showCopiedFeedback(button);
}

function showCopiedFeedback(button) {
  const originalText = button.innerHTML;
  button.innerHTML = '<i class="fas fa-check"></i> Copied!';
  button.classList.add("copied");

  setTimeout(function () {
    button.innerHTML = originalText;
    button.classList.remove("copied");
  }, 2000);
}

document.addEventListener("DOMContentLoaded", initializeApp);
