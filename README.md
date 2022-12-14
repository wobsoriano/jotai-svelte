# jotai-svelte

Primitive and flexible state management for Svelte based on [Jotai](https://github.com/pmndrs/jotai).

Experimental. Check [this](https://github.com/pmndrs/jotai/discussions/1514) for more info.

## Installation

```bash
pnpm add jotai jotai-svelte
```

## Usage

```ts
import { atom } from 'jotai-svelte'

export const countAtom = atom(0)
```

```html
<script lang="ts">
  import { useAtom } from 'jotai-svelte'
  import { countAtom } from './store'
  const count = useAtom(countAtom)
</script>

<button on:click={() => count.update(prev => prev + 1)}>
  Clicks: {$count}
</button>
```

Read more about [Jotai](https://github.com/pmndrs/jotai) here.

## License

MIT
