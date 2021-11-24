<script lang="ts">
  import { selectPeers } from '@100mslive/hms-video-store';
  import { getHMSState } from './hms';
  import Peer from './Peer.svelte';

  const peers = getHMSState(selectPeers);

  $: console.log($peers);
</script>

<section class="conference-section">
  <h2>Conference</h2>

  <div class="peers-container">
    {#each $peers || [] as peer}
      <Peer {peer} />
    {/each}
  </div>
</section>

<style>
  .conference-section {
    max-width: 960px;

    padding: 20px 30px;
    margin: 0 auto;
  }

  .conference-section h2 {
    text-align: center;
    font-size: 32px;

    padding-bottom: 10px;

    border-bottom: 1px solid #546e7a;
  }

  .peers-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(min-content, 1fr));
    place-items: center;
    grid-gap: 10px;
  }
</style>
