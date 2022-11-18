import { FormEvent, useEffect, useState } from "react";
import * as S from "./style";
import { LoadingComponent, ButtonComponent } from "components";
import { FcDatabase, FcUndo } from "react-icons/fc";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiAnime } from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IAnimeData } from "interfaces/anime.interface";
import { IErrorResponse } from "interfaces/user.interface";

const MessageStore = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const [formData, setFormData] = useState<IAnimeData>({
      autor: '',
      data_lancamento: '',
      name: '',
    })
  
  const { id } = useParams<{ id: string }>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      console.log(Number(id))
      if (Number(id) > 0) {
        await apiAnime.update(Number(id), formData);
        toast.success("Mensagem alterada com sucesso!");
      } else {
        await apiAnime.store(formData);
        toast.success("Mensagem cadastrada com sucesso!");
      }
      navigate('/adm/message')
    } catch (error) {
      const err = error as AxiosError<IErrorResponse>
      let messages = err.response?.data.message
      if (err.response?.data.errors) {
        messages = err.response?.data.errors?.map((i) => i.message)
          .reduce((total, cur) => `${total} ${cur}`)
      }
      toast.error(messages)
    }
  }

  async function handleChange(e: IAnimeData) {
    setFormData((state: IAnimeData | undefined) => ({ ...state, ...e }))
  }

  useEffect(() => {
    if (Number(id) > 0) {
      const fetchData = async (id: number) => {
        try {
          const response = await apiAnime.show(id);
          setFormData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData(Number(id));
    }
    setIsLoading(false);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <S.Main>
            <form method="POST" onSubmit={handleSubmit}>
              <Link to="/adm/message">
                <FcUndo /> Voltar
              </Link>
              <div>
              <label htmlFor="autor">Autor: </label>
                <input type="text" id="autor" placeholder="Escreva o nome do autor" required
                  onChange={(e) => handleChange({ autor: e.target.value })}
                  value={formData?.autor}
                />
              </div>
              <div>
              <label htmlFor="data_lancamento">Data_lancamento: </label>
                <textarea id="message" placeholder="Escreva a data de lançamento" required
                  onChange={(e) => handleChange({ data_lancamento: e.target.value })}
                  value={formData?.data_lancamento}
                />
              </div>
              <label htmlFor="name">Name: </label>
                <textarea id="message" placeholder="Escreva o nome do anime" required
                  onChange={(e) => handleChange({ name: e.target.value })}
                  value={formData?.name}
                />
              <ButtonComponent bgColor="add" type="submit">
                Enviar <FcDatabase />
              </ButtonComponent>
            </form>
          </S.Main>
        </>
      )}
    </>
  );
};

export default MessageStore;