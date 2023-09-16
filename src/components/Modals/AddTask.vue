<script setup lang="ts">
    import {useStore} from "vuex";

    const store = useStore();
    const emits = defineEmits(["closeDialog"]);
    function closeDialog()
    {
        emits('closeDialog', false)
    } 
    function handleSubmit(formData) {
        let task = {
            name: formData.target.elements.name?.value,
            description: formData.target.elements.description?.value,
            dueDate: formData.target.elements.dueDate?.value,
        }
        store.commit("addTask",task);
        
    }
    
</script>
<template>
<transition name="fade">
    <div>
        <div
        @click='closeDialog'
        class="absolute bg-black opacity-70 inset-0 z-0"
        ></div>
        <div
        class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
        <div class="container mx-auto p-4 bg-white">
            <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
                <h1 class="text-lg font-bold">Add Task</h1>
                <form class="flex flex-col mt-4" @submit.prevent="handleSubmit">
                <input
                    type="text"
                    name="name"
                    class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="description"
                    class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Description"
                />
                <input
                    type="date"
                    name="dueDate"
                    class="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                    placeholder="Due Date"
                />
                
                <button
                    type="submit"
                    class="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
                >
                    Add
                </button>
                <button
                    type="button"
                    @click='closeDialog'
                    class="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
                >
                    Clsoe
                </button>
                </form>
            </div>
            </div>
        </div>
    </div>
</transition>
</template>