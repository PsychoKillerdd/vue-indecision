<template>
    <div class="bg-gray-100 h-max flex flex-col max-w-lg mx-auto">
      <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
        <span>Mi esposa</span>
      </div>
      <ChatMessages :messages="messages" />
   <MessageBox @send-message="onMessage($event)"/>
    </div>
  </template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';
  
const messages = ref<ChatMessage[]>([
    {
      id: new Date().getTime(),
      message:'Hola mundo',
      itsMine:true,
    },
    {
      id: new Date().getTime() + 1,
      message:'no',
      itsMine:false,
      image:'https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif'
    }
  ]);
  const onMessage = (text:string) => {
      messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    })
  }
</script>