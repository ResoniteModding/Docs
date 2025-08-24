<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  
  let { strings } = $props();
  
  let showModal = $state(false);
  
  function checkDismissed() {
    const dismissed = document.cookie
      .split('; ')
      .find(row => row.startsWith('disclaimer-dismissed='));
    return !!dismissed;
  }
  
  function dismissModal() {
    // Set cookie for 1 year
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    document.cookie = `disclaimer-dismissed=true; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`;
    
    // Hide modal and restore scrolling
    showModal = false;
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
  }
  
  
  
  function openModal() {
    showModal = true;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
  }
  
  onMount(() => {
    if (!checkDismissed()) {
      openModal();
    }
    
    // Listen for custom event to open modal
    const handleOpenModal = () => openModal();
    window.addEventListener('open-disclaimer-modal', handleOpenModal);
    
    return () => {
      window.removeEventListener('open-disclaimer-modal', handleOpenModal);
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  });
</script>

{#if showModal}
  <div 
    id="disclaimer-modal" 
    class="modal-backdrop show" 
    role="presentation"
    transition:fade={{ duration: 300 }}
  >
    <div 
      class="modal-content" 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="disclaimer-title"
      transition:scale={{ duration: 300, start: 0.9 }}
    >
      <h2 id="disclaimer-title">{strings.title}</h2>
      <div class="modal-body">
        <p>
          {strings.independence.split('Resonite')[0]}
          <a href="https://resonite.com/" target="_blank" rel="noopener">Resonite</a>
          {strings.independence.split('Resonite')[1].split('Yellow Dog Man Studios S.r.o.')[0]}
          <a href="https://yellowdogman.com/" target="_blank" rel="noopener">Yellow Dog Man Studios S.r.o.</a>
          {strings.independence.split('Yellow Dog Man Studios S.r.o.')[1]}
        </p>
        <p>{strings.goal}</p>
        <p>
          {strings.openSource.split('GitHub repository')[0]}
          <a href="https://github.com/ResoniteModding/Docs" target="_blank" rel="noopener">GitHub repository</a>.
        </p>
        <p>{strings.wrongPlace}</p>
      </div>
      <div class="modal-footer">
        <a href="https://resonite.com/" class="sl-link-button secondary" target="_blank" rel="noopener">
          {strings.visitOfficial}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19.33 10.18a1 1 0 0 1-.77 0 1 1 0 0 1-.62-.93l.01-1.83-8.2 8.2a1 1 0 0 1-1.41-1.42l8.2-8.2H14.7a1 1 0 0 1 0-2h4.25a1 1 0 0 1 1 1v4.25a1 1 0 0 1-.62.93Z"/>
            <path d="M11 4a1 1 0 1 1 0 2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4Z"/>
          </svg>
        </a>
        <button class="sl-link-button primary" onclick={dismissModal}>
          {strings.continue}
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    backdrop-filter: blur(2px);
  }

  .modal-content {
    background-color: var(--sl-color-bg);
    border-radius: 12px;
    padding: 2rem;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--sl-color-gray-5);
  }

  .modal-body a {
    color: var(--sl-color-accent);
    text-decoration: none;
    transition: all 0.2s ease;
    border-bottom: 1px solid transparent;
  }

  .modal-body a:hover {
    color: var(--sl-color-accent-high);
    border-bottom-color: var(--sl-color-accent);
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    flex-wrap: wrap;
  }

  @layer starlight.components {
    .sl-link-button {
      align-items: center;
      border: 1px solid transparent;
      border-radius: 999rem;
      display: inline-flex;
      font-size: var(--sl-text-sm);
      gap: 0.5em;
      line-height: 1.1875;
      outline-offset: 0.25rem;
      padding: 0.4375rem 1.125rem;
      text-decoration: none;
      cursor: pointer;
      font-weight: 500;
			padding: 0.75rem 1rem;
    }
    
    .sl-link-button svg {
      flex-shrink: 0;
      width: 1em;
      height: 1em;
    }

    .sl-link-button.primary {
      background: var(--sl-color-text-accent);
      border-color: var(--sl-color-text-accent);
      color: var(--sl-color-black);
    }
    
    .sl-link-button.primary:hover {
      color: var(--sl-color-black);
      background: var(--sl-color-accent-high);
    }
    
    .sl-link-button.primary:focus {
      outline: 2px solid var(--sl-color-accent);
      outline-offset: 2px;
    }

    .sl-link-button.secondary {
      border-color: var(--sl-color-gray-4);
      color: var(--sl-color-white);
      background: transparent;
    }
    
    .sl-link-button.secondary:hover {
      background: var(--sl-color-gray-6);
      border-color: var(--sl-color-gray-3);
    }

    @media (min-width: 50rem) {
      .sl-link-button {
        font-size: var(--sl-text-base);
        padding: 0.9375rem 1.25rem;
      }
    }
  }


  @media (max-width: 600px) {
    .modal-content {
      padding: 1.5rem;
      width: 95%;
    }
  }

  :global(body.modal-open) {
    overflow: hidden;
    pointer-events: none;
  }
  
  :global(body.modal-open .modal-backdrop) {
    pointer-events: auto;
  }
</style>
