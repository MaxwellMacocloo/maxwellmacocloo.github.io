(function(){
  function extractMermaidSources(){
    var sources = [];
    var seenElements = new Set();
    document.querySelectorAll("div.language-mermaid").forEach(function(wrapper){
      var codeEl = wrapper.querySelector("code");
      if (codeEl) { sources.push({el: wrapper, text: codeEl.textContent}); seenElements.add(codeEl); }
    });
    document.querySelectorAll("pre > code.language-mermaid").forEach(function(codeEl){
      if (seenElements.has(codeEl)) { return; }
      sources.push({el: codeEl.parentElement, text: codeEl.textContent});
    });
    document.querySelectorAll("pre > code.mermaid").forEach(function(codeEl){
      if (seenElements.has(codeEl)) { return; }
      sources.push({el: codeEl.parentElement, text: codeEl.textContent});
    });
    return sources;
  }
  function init(){
    var sources = extractMermaidSources();
    console.log("Mermaid init: found " + sources.length + " block(s)");
    sources.forEach(function(item){
      var pre = document.createElement("pre");
      pre.className = "mermaid";
      pre.textContent = item.text;
      item.el.replaceWith(pre);
    });
    if (typeof mermaid === "undefined") {
      console.error("Mermaid init: mermaid library did not load");
      return;
    }
    mermaid.initialize({ startOnLoad: false });
    mermaid.run();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
