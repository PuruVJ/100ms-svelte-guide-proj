<script lang="ts">
  import { HMSPeer, HMSTrack, selectVideoTrackByPeerID } from '@100mslive/hms-video-store';
  import { getHMSState, hmsActions } from '../hms';

  export let peer: HMSPeer;

  const videoTrack = getHMSState(selectVideoTrackByPeerID(peer.id));

  let videoEl: HTMLVideoElement;

  function attachVideo(videoTrack: HMSTrack) {
    if (videoTrack) {
      if (videoTrack.enabled) {
        hmsActions.attachVideo(videoTrack.id, videoEl);
      } else {
        hmsActions.detachVideo(videoTrack.id, videoEl);
      }
    }
  }

  $: attachVideo($videoTrack);
</script>

<section class="peer-container">
  <video
    class="peer-video"
    class:local={peer.isLocal}
    autoPlay
    muted
    playsInline
    bind:this={videoEl}
  />

  <div class="peer-name">
    {peer.name}

    {#if peer.isLocal}
      (You)
    {/if}
  </div>
</section>

<style>
  .peer-video {
    height: 250px;
    width: 250px;

    margin-bottom: 10px;

    border-radius: 40%;

    object-fit: cover;
  }

  .peer-video.local {
    transform: scaleX(-1);
  }

  .peer-name {
    font-size: 14px;
    text-align: center;
  }

  .peer-container {
    padding: 10px;
  }
</style>
