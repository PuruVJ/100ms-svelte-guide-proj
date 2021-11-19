<script lang="ts">
  import { getHMSState } from './hms';
  import { selectIsConnectedToRoom } from '@100mslive/hms-video-store';

  const isConnected = getHMSState(selectIsConnectedToRoom);
</script>

<style>
</style>
