<script lang="ts">
  import { hmsActions } from '../hms';

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

<style>
  form {
    max-width: 450px;

    margin: 30px auto;
    padding: 20px;

    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    margin: 1rem;
  }

  input {
    display: block;

    width: 100%;
    height: 34px;

    padding: 5px;

    color: inherit;
    font-family: inherit;

    background: #37474f;

    border-radius: 8px;
    border: 2px solid transparent;
  }

  input::placeholder {
    color: #aaa;
  }

  .input-container {
    margin-bottom: 20px;
  }

  form h2 {
    margin-bottom: 20px;
  }
</style>
