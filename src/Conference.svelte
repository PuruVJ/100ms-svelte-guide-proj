<script lang="ts">
  import { selectPeers } from '@100mslive/hms-video-store';
  import { getHMSState } from './hms';
  import Peer from './Peer.svelte';

  const peers = getHMSState(selectPeers);
</script>

<section class="conference-section">
  <h2>Conference</h2>

  <div class="peers-container">
    {#each $peers as peer}
      <Peer {peer} />
    {/each}
  </div>
</section>
