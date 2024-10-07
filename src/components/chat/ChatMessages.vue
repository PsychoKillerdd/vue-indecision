<template>
    <div>
        <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
          <!-- Messages go here -->
          <!-- Example Message -->
         <ChatBubble 
         v-for="message in messages"
         :key="message.id"
         v-bind="message"
         />
        

        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
 import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref } from 'vue';
 interface Props {
  messages:ChatMessage[];
 }
 
const {messages} = defineProps<Props>();

 document.querySelector('.flex-1')
 const chatRef = ref<HTMLDivElement|null>(null);

 


</script>