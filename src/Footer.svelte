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
