<script lang="ts">
  import { onMount } from 'svelte';

  let featuredproducts: any[] = [];

  const getFeaturedproducts = async () => {
    try {
      const response = await fetch(
        'https://rest.binshops.com/rest/featuredproducts'
      );
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      featuredproducts = data.psdata;
    } catch (error) {
      console.error(error);
    }
  };

  onMount(async () => {
    await getFeaturedproducts();
  });
</script>

<div class="my-5 rounded-lg p-5">
  <h1 class="text-2xl font-semibold mb-4">Featured Products</h1>

  {#if featuredproducts?.length}
    {#each featuredproducts as product}
      <div class="flex items-center justify-start space-x-6 border-b py-2">
        <div class="w-64 shrink-0">
          <img src={product.default_image?.url} alt="" />
        </div>

        <div class="w-full">
          <h3 class="text-xl font-semibold text-gray-900">{product.name}</h3>

          <div class="mt-2">
            {@html product.description_short}
          </div>

          <div class="mt-2">
            <h4 class="font-semibold">Features</h4>
            <ul>
              {#each product.features as feature}
                <li class="text-sm">
                  <span>{feature.name}</span>
                  <span>: {feature.value}</span>
                </li>
              {/each}
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    {/each}
  {:else}
    <p>Loading...</p>
  {/if}
</div>
