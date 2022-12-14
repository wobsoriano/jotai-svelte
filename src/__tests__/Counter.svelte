<script lang="ts">
  import { useAtom } from '../index'
  import { countAtom } from './store';
  const count = useAtom(countAtom)
  // const fe = useAtom(fetchUrlAtom)
</script>

<button on:click={() => count.update(prev => prev + 1)}>
  Clicks: {$count}
</button>
