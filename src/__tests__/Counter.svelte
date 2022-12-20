<script lang="ts">
  import { useAtom } from '../index'
  import { countAtom } from './store';
  const count = useAtom(countAtom)
</script>

<button on:click={() => count.update(prev => prev + 1)}>
  Clicks: {$count}
</button>
