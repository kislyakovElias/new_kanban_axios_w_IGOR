import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios"
import Column from "./Column";
import 'bootstrap/dist/css/bootstrap.css'
import Controller from "./Controller";
import Menu from "./Menu";



function App() {

  const[cards, setCards] = useState([])
  const statuses = ['todo', 'progress', 'review', 'done'];

  const getCards =() =>{
    axios.get('http://nazarov-kanban-server.herokuapp.com/card')
        .then(res => {
          setCards(res.data)
        })
        .catch(err => console.log(err))
  }

  const createCard = (input) => {
      //const input = {_id: Math.random(), status:statusInput, name:nameInput, description:descriptionInput, priority: 1};nameInput, statusInput, descriptionInput
    axios
        .post('http://nazarov-kanban-server.herokuapp.com/card', input)
        .then(res => {
            axios.get('http://nazarov-kanban-server.herokuapp.com/card')
                .then(res => {
                    setCards(res.data)
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))

  }

  const deleteCard = (id) => {
      axios
          .delete('http://nazarov-kanban-server.herokuapp.com/card/'+ id)
          .then(res => {
              axios.get('http://nazarov-kanban-server.herokuapp.com/card')
                  .then(res => {
                      setCards(res.data)
                  })
                  .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
  }

  const editCard = (id, input) => {
      axios
          .patch(`http://nazarov-kanban-server.herokuapp.com/card/${id}`, input)
      .then(res => {
          getCards()
          //     axios.get('http://nazarov-kanban-server.herokuapp.com/card')
          //         .then(res => {
          //             setCards(res.data)
        })
          //         .catch(err => console.log(err))
          // })
          .catch(err => console.log(err))
  }


  useEffect(() =>{
    getCards()
  },[])

    const changePriority = (id, priority, val) => {
        const updPrior = {priority: priority + val }

        axios
            .patch(`http://nazarov-kanban-server.herokuapp.com/card/${id}`, updPrior)
            .then(res => {
                axios.get('http://nazarov-kanban-server.herokuapp.com/card')
                    .then(res => setCards(res.data))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    const changeStatus = (id, status) => {
        const updStat = {status: statuses[status] }
        axios
            .patch(`http://nazarov-kanban-server.herokuapp.com/card/${id}`, updStat)
            .then(res => {
                axios.get('http://nazarov-kanban-server.herokuapp.com/card')
                    .then(res => setCards(res.data))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    const [addCard, setAddCard] = useState(false);

  const addCardToggle = () => {
  setAddCard(!addCard)
  }


  return (
      <div className='container'>
          <Controller addCard={addCard} setAddCard={setAddCard} createCard={createCard}/>
          <Menu addCardToggle={addCardToggle}/>
        <div className='row'>

      {statuses.map(el => <Column cards={cards}
                                  el={el}
                                  deleteCard={deleteCard}
                                  statuses={statuses}
                                  changePriority={changePriority}
                                  changeStatus={changeStatus}
                                  editCard={editCard}
      />)}


        </div>
      </div>
  );
}

export default App;
