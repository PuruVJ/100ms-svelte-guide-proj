<script lang="ts">
  import { selectIsConnectedToRoom } from '@100mslive/hms-video-store';
  import Conference from './Conference.svelte';
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';
  import { getHMSState, hmsActions } from './hms';
  import JoinForm from './JoinForm.svelte';
  import './global.css';

  const isConnected = getHMSState(selectIsConnectedToRoom);

  function leaveRoom() {
    if ($isConnected) {
      hmsActions.leave();
    }
  }
</script>

<svelte:window on:unload={leaveRoom} />

<main>
  <Header isConnected={$isConnected} />

  {#if $isConnected}
    <Conference />
    <Footer />
  {:else}
    <JoinForm />
  {/if}
</main>
