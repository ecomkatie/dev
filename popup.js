document.getElementById("scrape").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          const jobs = document.querySelectorAll("h1, h2, p");
          return Array.from(jobs).map(el => el.innerText).slice(0, 5);
        }
      }, (results) => {
        document.getElementById("output").innerText = results[0].result.join("\n\n");
      });
    });
  });
  