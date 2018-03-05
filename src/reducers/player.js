import * as PlayerActionTypes from '../actiontypes/player';


const initialState= {
    players: [
      {
        name: "Jim Hoskins",
        score: 33,
        id:10,
        created: "11/15/2016",
        updated: "12/15/2016"
      },
      {
        name: "Jim Andrew",
        score: 33,
        id:2,
        created: "11/15/2016",
        updated: "12/15/2016"
      },
      {
        name: "Chalkey Hoskins",
        score: 33,
        id:3,
        created: "11/15/2016",
        updated: "12/15/2016"
      },
      {
        name: "Andrew Chalkey",
        score: 33,
        id:40,
        created: "11/15/2016",
        updated: "12/15/2016"
      },
      {
        name: "Tosin Jemilehin",
        score: 33,
        id:5,
        created: "11/15/2016",
        updated: "12/15/2016"
      }],

      selectedPlayerIndex: -1
    };

export default function Player( state=initialState , action)   //reducer must be written as a pure function
{
    let date=new Date();
    let day=date.getDate();
    let month=date.getMonth()+1;
    let year=date.getFullYear();

    switch (action.type)
    {
        case PlayerActionTypes.ADD_PLAYER:
        {
            const addPlayerList=[...state.players,
                {
                    name:action.name,
                    created: `${month}/${day}/${year}`,
                    updated: "",
                    score: 0,
                } ];
            return {
                ...state,
                players: addPlayerList  
            };
        }
        case PlayerActionTypes.REMOVE_PLAYER:{
            const removePlayerList=[...state.players.slice(0,action.index),
                ...state.players.slice(action.index+1)];
            return {
                ...state,
                players: removePlayerList
            }
        }

        case PlayerActionTypes.UPDATE_PLAYER_SCORE:{
            const updatePlayerList= state.players.map((player,index)=>{
                if(index===action.index)
                {
                    return{
                        ...player,
                        score:player.score + action.score,
                        updated: `${month}/${day}/${year}`
                    };
                }
                return player;
            });
            return {
                ...state,
                players: updatePlayerList
            }
        }


        case PlayerActionTypes.SELECT_PLAYER:
           return{
               ...state,
               selectedPlayerIndex: action.index
           };

        default:
            return state;
    }
}