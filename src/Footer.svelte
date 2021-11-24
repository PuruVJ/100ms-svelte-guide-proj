<script lang="ts">
  import { selectIsLocalAudioEnabled, selectIsLocalVideoEnabled } from '@100mslive/hms-video-store';
  import { getHMSState, hmsActions } from './hms';

  const isVideoEnabled = getHMSState(selectIsLocalVideoEnabled);
  const isAudioEnabled = getHMSState(selectIsLocalAudioEnabled);

  function toggleAudio() {
    hmsActions.setLocalAudioEnabled(!$isAudioEnabled);
  }

  function toggleVideo() {
    hmsActions.setLocalVideoEnabled(!$isVideoEnabled);
  }
</script>

<footer class="control-bar">
  <button class="btn-control" on:click={toggleAudio}>
    {#if $isAudioEnabled}
      Mute
    {:else}
      Unmute
    {/if}
  </button>

  <button class="btn-control" on:click={toggleVideo}>
    {#if $isVideoEnabled}
      Stop Video
    {:else}
      Show video
    {/if}
  </button>
</footer>

<style>
  .control-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;

    display: flex;
    justify-content: center;

    padding: 15px;
  }

  .control-bar > *:not(:first-child) {
    margin-left: 8px;
  }

  .btn-control {
    width: 64px;
    height: 64px;

    background-color: #607d8b;

    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    color: white;

    border: 2px solid #37474f;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
</style>
