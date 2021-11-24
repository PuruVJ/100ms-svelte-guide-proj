<script lang="ts">
  import { hmsActions } from './hms';

  export let isConnected: boolean;

  function leaveRoom() {
    hmsActions.leave();
  }
</script>

<header>
  <img
    class="logo"
    src="https://ashwins93.app.100ms.live/static/media/100ms_logo.3cfd8818.svg"
    alt="100ms Logo"
  />

  {#if isConnected}
    <button id="leave-btn" class="btn-danger" on:click={leaveRoom}> Leave Room </button>
  {/if}
</header>

<style>
</style>
