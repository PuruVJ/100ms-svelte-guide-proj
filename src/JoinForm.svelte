<script lang="ts">
  import { hmsActions } from './hms';

  let name = '';
  let token = '';

  function join() {
    hmsActions.join({ userName: name, authToken: token });
  }
</script>

<form on:submit|preventDefault={join}>
  <h2>Join Room</h2>

  <label class="input-container">
    Name to Display
    <input
      bind:value={name}
      type="text"
      name="name"
      placeholder="eg. Paul Attreides, Hermione, Chani"
    />
  </label>

  <label class="input-container">
    Room Token
    <input
      bind:value={token}
      type="text"
      name="token"
      placeholder="Auth token from 100ms console"
    />
  </label>

  <button type="submit" class="btn-primary">Join</button>
</form>
