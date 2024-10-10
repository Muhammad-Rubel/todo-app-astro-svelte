<script lang="ts">
  import * as m from '../paraglide/messages';
  let name: string;
</script>

<div class="my-5 rounded-lg p-5">
  <p>{m.homepageTitle()}</p>

  <h1 class="text-2xl font-semibold mb-4">Hello {name || 'John'}!</h1>

  <input
    placeholder="enter your name"
    bind:value={name}
    class="px-4 py-2 rounded bg-gray-100"
  />
</div>
