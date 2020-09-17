<template>
<div>
  <p>A beautiful dashboard page</p>
  <FetchTodoListTable></FetchTodoListTable>
</div>
</template>

<script>
import FetchTodoListTable from "@/components/Table/todo/FetchTodoListTable";
export default {
name: "Dashboard",
  components: {FetchTodoListTable}
}
</script>

<style scoped>

</style>