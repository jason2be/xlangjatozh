(() => {  
  // 初始化时检查并替换元素  
  function replaceLangAttributesOnInit() {  
    const elements = document.querySelectorAll('[lang="ja"]');  
    elements.forEach(element => {  
      console.log('替换元素 ' + element.outerHTML);  
      element.setAttribute('lang', 'zh');  
    });  
  }  
    
  // 监听 DOM 变化  
  const observer = new MutationObserver((mutations) => {  
    mutations.forEach(mutation => {  
      if (mutation.type === 'childList' && mutation.addedNodes.length) {  
        mutation.addedNodes.forEach(node => {  
          if (node.nodeType === Node.ELEMENT_NODE) {  
            const elements = node.querySelectorAll('[lang="ja"]');  
            elements.forEach(element => {  
              console.log('替换元素 ' + element.outerHTML);  
              element.setAttribute('lang', 'zh');  
            });  
          }  
        });  
      }  
    });  
  });  
  
  // 开始监听整个文档的DOM变化  
  observer.observe(document, { childList: true, subtree: true });  
  
  // 初始化时替换元素  
  replaceLangAttributesOnInit();  
  
  console.log('开始监听 DOM 变化');  
})();