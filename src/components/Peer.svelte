<script lang="ts">
  import { HMSPeer, HMSTrack, selectVideoTrackByPeerID } from '@100mslive/hms-video-store';
  import { getHMSState, hmsActions } from '../hms';

  export let peer: HMSPeer;

  const videoTrack = getHMSState(selectVideoTrackByPeerID(peer.id));

  function asVideoStream(videoEl: HTMLVideoElement, videoTrack: HMSTrack) {
    function update() {
      if (!videoTrack) return;

      if (!videoTrack.enabled) {
        hmsActions.detachVideo(videoTrack.id, videoEl);
        return;
      }

      hmsActions.attachVideo(videoTrack.id, videoEl);
    }

    function destroy() {
      if (!videoTrack?.enabled) return;

      hmsActions.detachVideo(videoTrack.id, videoEl);
    }

    update();

    return {
      update,
      destroy,
    };
  }
</script>

<section class="peer-container">
  <video
    class="peer-video"
    class:local={peer.isLocal}
    autoPlay
    muted
    playsInline
    use:asVideoStream={$videoTrack}
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
