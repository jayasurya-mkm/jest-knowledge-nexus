import { slidesData } from './slides.js';

class PresentationApp {
  constructor() {
    this.slides = slidesData;
    this.currentIndex = 0;
    this.isPlaying = false;
    this.playTimer = null;
    this.presentationTimer = null;
    this.secondsElapsed = 0;
    
    // DOM Cache
    this.body = document.body;
    this.slideCard = document.getElementById('active-slide-card');
    this.currentIndexNum = document.getElementById('current-index-num');
    this.totalSlidesNum = document.getElementById('total-slides-num');
    this.deckTitleDisplay = document.getElementById('deck-title-display');
    this.progressBarFill = document.getElementById('progress-bar-fill');
    this.currentSlideBadge = document.getElementById('current-slide-badge');

    // Controls & Selectors
    this.themeSelect = document.getElementById('theme-select');
    this.transitionSelect = document.getElementById('transition-select');
    this.btnPrev = document.getElementById('btn-prev');
    this.btnNext = document.getElementById('btn-next');
    this.btnPlay = document.getElementById('btn-play');
    this.playIcon = document.getElementById('play-icon');
    this.playText = document.getElementById('play-text');
    this.navPrevSide = document.getElementById('nav-prev-side');
    this.navNextSide = document.getElementById('nav-next-side');

    // Modals & Drawers
    this.btnGrid = document.getElementById('btn-grid');
    this.btnNotes = document.getElementById('btn-notes');
    this.btnEdit = document.getElementById('btn-edit');
    this.btnPrint = document.getElementById('btn-print');
    this.btnFullscreen = document.getElementById('btn-fullscreen');

    this.gridModalOverlay = document.getElementById('grid-modal-overlay');
    this.slidesGridContainer = document.getElementById('slides-grid-container');
    this.btnCloseGrid = document.getElementById('btn-close-grid');

    this.speakerNotesDrawer = document.getElementById('speaker-notes-drawer');
    this.btnCloseNotes = document.getElementById('btn-close-notes');
    this.notesSlideTitle = document.getElementById('notes-slide-title');
    this.notesContent = document.getElementById('notes-content');
    this.timerDisplay = document.getElementById('timer-display');
    this.btnResetTimer = document.getElementById('btn-reset-timer');

    this.editModalOverlay = document.getElementById('edit-modal-overlay');
    this.btnCloseEdit = document.getElementById('btn-close-edit');
    this.btnSaveEdit = document.getElementById('btn-save-edit');
    this.editBadge = document.getElementById('edit-badge');
    this.editTitle = document.getElementById('edit-title');
    this.editSubtitle = document.getElementById('edit-subtitle');
    this.editContent = document.getElementById('edit-content');
    this.editNotes = document.getElementById('edit-notes');

    // Lightbox Zoom Modal
    this.lightboxOverlay = document.getElementById('lightbox-modal-overlay');
    this.lightboxImage = document.getElementById('lightbox-image');
    this.btnCloseLightbox = document.getElementById('btn-close-lightbox');

    this.init();
  }

  init() {
    this.totalSlidesNum.textContent = this.slides.length;
    this.renderSlide(0);
    this.buildGridThumbnails();
    this.setupEventListeners();
    this.startPresentationTimer();
  }

  renderSlide(index, direction = 'next') {
    if (index < 0 || index >= this.slides.length) return;
    this.currentIndex = index;
    const slide = this.slides[index];

    // Animation transition class
    const animClass = direction === 'next' ? 'slide-entering-next' : 'slide-entering-prev';
    this.slideCard.classList.remove('slide-entering-next', 'slide-entering-prev');
    void this.slideCard.offsetWidth; // Trigger reflow
    this.slideCard.classList.add(animClass);

    // Build Slide HTML
    let headerHTML = '';
    if (slide.badge || slide.title || slide.subtitle) {
      headerHTML = `
        <div class="slide-header-badge">${slide.badge || 'SLIDE ' + (index + 1)}</div>
        <h2 class="slide-title">${slide.title}</h2>
        ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ''}
      `;
    }

    this.slideCard.innerHTML = `
      ${headerHTML}
      <div class="slide-body-content">
        ${slide.content}
      </div>
    `;

    // Update Header & Footer Info
    this.currentIndexNum.textContent = index + 1;
    this.currentSlideBadge.textContent = slide.badge || `SLIDE ${index + 1}`;
    const progressPercent = ((index + 1) / this.slides.length) * 100;
    this.progressBarFill.style.width = `${progressPercent}%`;

    // Update Presenter Notes
    this.notesSlideTitle.textContent = `Slide ${index + 1}: ${slide.title}`;
    this.notesContent.innerHTML = slide.notes || 'No notes for this slide.';

    // Update active state in grid
    this.updateGridActiveState();
  }

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.renderSlide(this.currentIndex + 1, 'next');
    } else if (this.isPlaying) {
      this.togglePlay(); // Stop auto-play at end
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.renderSlide(this.currentIndex - 1, 'prev');
    }
  }

  goToSlide(index) {
    const dir = index >= this.currentIndex ? 'next' : 'prev';
    this.renderSlide(index, dir);
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.playIcon.className = 'ph ph-pause';
      this.playText.textContent = 'Pause';
      this.playTimer = setInterval(() => this.nextSlide(), 5000);
    } else {
      this.playIcon.className = 'ph ph-play';
      this.playText.textContent = 'Auto Play';
      clearInterval(this.playTimer);
    }
  }

  startPresentationTimer() {
    this.presentationTimer = setInterval(() => {
      this.secondsElapsed++;
      const mins = Math.floor(this.secondsElapsed / 60).toString().padStart(2, '0');
      const secs = (this.secondsElapsed % 60).toString().padStart(2, '0');
      this.timerDisplay.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  resetPresentationTimer() {
    this.secondsElapsed = 0;
    this.timerDisplay.textContent = '00:00';
  }

  buildGridThumbnails() {
    this.slidesGridContainer.innerHTML = '';
    this.slides.forEach((slide, idx) => {
      const card = document.createElement('div');
      card.className = `grid-thumb-card ${idx === this.currentIndex ? 'active' : ''}`;
      card.dataset.index = idx;
      card.innerHTML = `
        <div class="thumb-num">SLIDE ${idx + 1}</div>
        <div class="thumb-title">${slide.title}</div>
        <div class="thumb-badge">${slide.badge || ''}</div>
      `;
      card.addEventListener('click', () => {
        this.goToSlide(idx);
        this.toggleGridModal(false);
      });
      this.slidesGridContainer.appendChild(card);
    });
  }

  updateGridActiveState() {
    const cards = this.slidesGridContainer.querySelectorAll('.grid-thumb-card');
    cards.forEach((card, idx) => {
      if (idx === this.currentIndex) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  toggleGridModal(show) {
    if (show === undefined) {
      this.gridModalOverlay.classList.toggle('active');
    } else {
      this.gridModalOverlay.classList.toggle('active', show);
    }
  }

  toggleSpeakerNotes(show) {
    if (show === undefined) {
      this.speakerNotesDrawer.classList.toggle('open');
    } else {
      this.speakerNotesDrawer.classList.toggle('open', show);
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.error(err));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  openEditModal() {
    const slide = this.slides[this.currentIndex];
    this.editBadge.value = slide.badge || '';
    this.editTitle.value = slide.title || '';
    this.editSubtitle.value = slide.subtitle || '';
    this.editContent.value = slide.content || '';
    this.editNotes.value = slide.notes || '';
    this.editModalOverlay.classList.add('active');
  }

  saveEditModal() {
    const slide = this.slides[this.currentIndex];
    slide.badge = this.editBadge.value;
    slide.title = this.editTitle.value;
    slide.subtitle = this.editSubtitle.value;
    slide.content = this.editContent.value;
    slide.notes = this.editNotes.value;

    this.renderSlide(this.currentIndex);
    this.buildGridThumbnails();
    this.editModalOverlay.classList.remove('active');
  }

  openImageLightbox(src, alt = '') {
    if (!this.lightboxOverlay || !this.lightboxImage) return;
    this.lightboxImage.src = src;
    this.lightboxImage.alt = alt || 'Zoomed View';
    this.lightboxOverlay.classList.add('active');
  }

  closeImageLightbox() {
    if (!this.lightboxOverlay) return;
    this.lightboxOverlay.classList.remove('active');
  }

  setupEventListeners() {
    // Navigation Buttons
    this.btnNext.addEventListener('click', () => this.nextSlide());
    this.btnPrev.addEventListener('click', () => this.prevSlide());
    this.navNextSide.addEventListener('click', () => this.nextSlide());
    this.navPrevSide.addEventListener('click', () => this.prevSlide());
    this.btnPlay.addEventListener('click', () => this.togglePlay());

    // Image Zoom Click Delegation
    this.slideCard.addEventListener('click', (e) => {
      const img = e.target.closest('img');
      if (img && img.src) {
        this.openImageLightbox(img.src, img.alt);
      }
    });

    // Lightbox Modal Controls
    if (this.btnCloseLightbox) {
      this.btnCloseLightbox.addEventListener('click', () => this.closeImageLightbox());
    }

    if (this.lightboxOverlay) {
      this.lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === this.lightboxOverlay || e.target === this.lightboxImage) {
          this.closeImageLightbox();
        }
      });
    }

    // Toolbar Actions
    this.btnGrid.addEventListener('click', () => this.toggleGridModal());
    this.btnCloseGrid.addEventListener('click', () => this.toggleGridModal(false));

    this.btnNotes.addEventListener('click', () => this.toggleSpeakerNotes());
    this.btnCloseNotes.addEventListener('click', () => this.toggleSpeakerNotes(false));
    this.btnResetTimer.addEventListener('click', () => this.resetPresentationTimer());

    this.btnEdit.addEventListener('click', () => this.openEditModal());
    this.btnCloseEdit.addEventListener('click', () => this.editModalOverlay.classList.remove('active'));
    this.btnSaveEdit.addEventListener('click', () => this.saveEditModal());

    this.btnPrint.addEventListener('click', () => window.print());
    this.btnFullscreen.addEventListener('click', () => this.toggleFullscreen());

    // Theme Selector
    this.themeSelect.addEventListener('change', (e) => {
      this.body.className = `${e.target.value} ${this.transitionSelect.value}`;
    });

    // Transition Selector
    this.transitionSelect.addEventListener('change', (e) => {
      this.body.className = `${this.themeSelect.value} ${e.target.value}`;
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      // Don't intercept typing in modal inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      switch (e.code) {
        case 'ArrowRight':
        case 'Space':
        case 'PageDown':
          e.preventDefault();
          this.nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          this.prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          this.goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          this.goToSlide(this.slides.length - 1);
          break;
        case 'KeyO':
          e.preventDefault();
          this.toggleGridModal();
          break;
        case 'KeyN':
          e.preventDefault();
          this.toggleSpeakerNotes();
          break;
        case 'KeyF':
          e.preventDefault();
          this.toggleFullscreen();
          break;
        case 'Escape':
          this.toggleGridModal(false);
          this.toggleSpeakerNotes(false);
          this.editModalOverlay.classList.remove('active');
          this.closeImageLightbox();
          break;
      }
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new PresentationApp();
});
