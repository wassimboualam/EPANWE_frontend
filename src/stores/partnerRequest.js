import api from "@/api";
import { requestBackend } from "@/utilities";
import { defineStore } from "pinia";
import { useToastStore } from "./toast";

export const usePartnerRequestStore = defineStore('partnerRequest', {
  state: () => ({
    requests: [],
  }),
  actions: {
    async refreshAll() {
        const toastStore = useToastStore()
        try {
            this.requests =  await requestBackend(null, {
              path: api.partnerRequest.paths.index,
              contentType: null,
            })
        } catch (error) {
            toastStore.error(`${error.name} : ${error.message}`)
        }
    },
    async delete(id, csrf) {
        const toastStore = useToastStore()
        try {
            const res = await requestBackend(null, {
              path: api.partnerRequest.paths.delete + id,
              method: 'DELETE',
              contentType: null,
              csrf: csrf,
            })
            this.refreshAll()
            return res
        } catch (error) {
            toastStore.error(`${error.name} : ${error.message}`)
        }

    },
  },
})