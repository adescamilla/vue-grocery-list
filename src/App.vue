<script setup>

</script>

<template>
  <main>
    <h1 class="title">📝 Vue Grocery List 📝</h1>
    <form class="newGroceryForm">
        <input id="newGrocery" autocomplete="off" type="text" placeholder="Add an item to your list" />
        <button id="addBtn" type="submit">Add</button>
    </form>
    <ul>
      <li>Tortilla</li>
    </ul>
  </main>
</template>

<style lang="postcss" scoped>
  main {
    @apply mt-8 flex flex-col justify-center items-center gap-8;
    .title {
      @apply m-2 text-6xl font-light tracking-wider text-accent;
    }
    form {
      @apply flex focus-within:ring-4 focus-within:ring-accent focus-within:rounded-lg;
      input {
        @apply bg-white text-comment p-2 w-80 text-2xl rounded-l-md outline-none;
      }
      button {
        @apply bg-accent text-background p-2 text-2xl font-bold rounded-r-md;
        &:hover {
          @apply bg-purplish;
        }
      }
    }
    ul {
      @apply flex flex-col items-center justify-center rounded-lg bg-comment;
      li {
        @apply bg-white text-background m-2 p-2 w-96 text-center;
        &:hover {
          @apply bg-purplish font-bold cursor-pointer;
        }
      }
    }
  }
</style>
