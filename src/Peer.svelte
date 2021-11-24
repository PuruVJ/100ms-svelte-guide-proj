<script lang="ts">
  import { HMSPeer, selectVideoTrackByPeerID } from '@100mslive/hms-video-store';
  import { getHMSState, hmsActions } from './hms';

  export let peer: HMSPeer;

  const videoTrack = getHMSState(selectVideoTrackByPeerID(peer.id));

  // Mount the video on our video element
  function asVideoStream(videoEl: HTMLVideoElement) {
    if ($videoTrack) {
      hmsActions.attachVideo($videoTrack.id, videoEl);
    } else {
      hmsActions.detachVideo($videoTrack.id, videoEl);
    }

    return {
      destroy: () => {
        hmsActions.detachVideo($videoTrack.id, videoEl);
      },
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
    use:asVideoStream
  />

  <div class="peer-name">
    {peer.name}

    {#if peer.isLocal}
      (You)
    {/if}
  </div>
</section>
