import { IAnimeData, IAnimeForm } from "interfaces/anime.interface";
import api from "services/api";

class AnimeData {
  index() {
    return api.get<IAnimeData[]>('/messages')
  }
  store(data: IAnimeForm) {
    return api.post(`/messages`, data)
  }
  show(id: number) {
    return api.get<IAnimeData>(`/messages/${id}`)
  }
  update(id: number, data: IAnimeForm) {
    return api.put(`/messages/${id}`, data)
  }
  destroy(id: number) {
    return api.delete(`/messages/${id}`)
  }
}

export default new AnimeData()