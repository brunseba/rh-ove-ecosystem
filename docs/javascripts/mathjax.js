window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { 
  MathJax.startup.output.clearCache?.()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
})

// Enhanced functionality for multi-cluster documentation
document.addEventListener('DOMContentLoaded', function() {
  // Enhanced copy code functionality
  const enhanceCopyCode = () => {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
      // Add cluster context to YAML blocks
      if (block.classList.contains('language-yaml')) {
        const content = block.textContent;
        if (content.includes('kind: VirtualMachine')) {
          block.setAttribute('data-context', 'vm-config');
        } else if (content.includes('kind: Application')) {
          block.setAttribute('data-context', 'argocd-config');
        } else if (content.includes('kind: ManagedCluster')) {
          block.setAttribute('data-context', 'rhacm-config');
        }
      }
    });
  };
  
  // Initialize enhancements
  enhanceCopyCode();
});
