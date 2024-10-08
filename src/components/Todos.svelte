<script lang="ts">
  import { onMount } from 'svelte';

  let todos: any[] = [];

  const getTodos = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const data = await response.json();

      todos = data;
    } catch (error) {
      console.error(error);
    }
  };

  onMount(async () => {
    await getTodos();
  });
</script>

<div class="my-5 rounded-lg p-5">
  <h1 class="text-2xl font-semibold mb-4">Todos</h1>

  {#if todos}
    {#each todos as todo}
      <div class="flex items-center justify-between border-b py-2">
        <p>{todo.title}</p>
        <input type="checkbox" checked={todo.completed} />
      </div>
    {/each}
  {:else}
    <p>Loading...</p>
  {/if}
</div>
