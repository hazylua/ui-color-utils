<script lang="ts">
  import clsx from 'clsx';

  export let id: string | null = null;
  export let name: string | null = null;
  export let value: string | null = null;
  export let className: string | null = null;
</script>

<input
  class={clsx(
    `
    appearance-none
    border-2 border-background
    bg-background
    outline-none
    outline
    ring-2
    ring-onBackground transition-all hover:outline-2 hover:ring-primary focus:outline-2 focus:outline-primary
    focus:ring-0
    `,
    className
  )}
  on:change
  type="color"
  {id}
  {value}
  {name}
/>

<style lang="postcss">
  :global(html) {
  }
  input[type='color'] {
    border-radius: 9999px;
    padding: 0;
  }

  input[type='color']::-moz-color-swatch {
    border: none;
    border-radius: 9999px;
  }

  input[type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
    border-radius: 9999px;
  }

  input[type='color']::-webkit-color-swatch {
    border: none;
    border-radius: 9999px;
  }
</style>
