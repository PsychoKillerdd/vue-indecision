import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';
export const useChat = () => {
    
    
    const messages = ref<ChatMessage[]>([
        {
          id: new Date().getTime(),
          message:'Indroduce preguntas de si o no , con el signo "?" al final',
          itsMine:true,
        },
        {
          id: new Date().getTime() + 1,
          message:'no',
          itsMine:false,
          image:'https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif'
        }
      ]);



      const getHerResponse = async() => {
        const resp = await fetch('https://yesno.wtf/api');
        const data = (await resp.json() as YesNoResponse);
        return data
      }


      
      const onMessage = async(text:string) => {
        if(text.length === 0) return;
          messages.value.push({
          id: new Date().getTime(),
          itsMine: true,
          message: text,
        })
        //evaluar si termina con ?
        if(!text.endsWith('?')) return;
        await sleep(1.5);
        const {answer,image} = await getHerResponse();
        messages.value.push({
            id: new Date().getTime(),
            itsMine: false,
            message: answer,
            image:image
          })



      }




    return {
        //properties
        messages,
        //methods
        onMessage,



    }
}