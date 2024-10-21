import api from "../lib/axios";

export const startGame = async () => {
    try {
        console.log('start game');
        const url = "/game/start-game";
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

export const loseLife = async () => {
    try {
        const url = "/game/lose-life";
        const { data } = await api.get(url);
        console.log('lose life', data.lives);
        
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const gameOver = async () => {
    try {
        console.log('game over');
        
        const url = "/game/game-over";
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const gameWon = async () => {
    console.log('Game won');
    
    try {
        const url = "/game/game-won";
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        console.error(error);
    }
}
