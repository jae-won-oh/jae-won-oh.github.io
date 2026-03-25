/* =============================================
   Scroll spy — highlights active nav link
   ============================================= */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => observer.observe(s));
}

/* =============================================
   Category filter — writings page
   ============================================= */
function initCategoryFilter() {
  const tabs = document.querySelectorAll('.filter-tab[data-filter]');
  const posts = document.querySelectorAll('.post-item[data-category]');
  const emptyState = document.querySelector('.empty-state');

  if (!tabs.length) return;

  const urlParams = new URLSearchParams(window.location.search);
  const initialCat = urlParams.get('cat') || 'all';

  function applyFilter(cat) {
    // Update tab states
    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.filter === cat);
      tab.setAttribute('aria-selected', tab.dataset.filter === cat);
    });

    // Show/hide posts
    let visible = 0;
    posts.forEach((post) => {
      const show = cat === 'all' || post.dataset.category === cat;
      post.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if (emptyState) {
      emptyState.style.display = visible === 0 ? '' : 'none';
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.filter;
      const url = cat === 'all'
        ? window.location.pathname
        : window.location.pathname + '?cat=' + cat;
      history.pushState({ cat }, '', url);
      applyFilter(cat);
    });
  });

  window.addEventListener('popstate', (e) => {
    const cat = (e.state && e.state.cat) || 'all';
    applyFilter(cat);
  });

  applyFilter(initialCat);
}

/* =============================================
   Init
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  initScrollSpy();
  initCategoryFilter();
});
